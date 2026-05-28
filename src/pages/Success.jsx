import { useEffect, useState } from 'react'
import axios from 'axios'
import './Success.css'
import emailjs from '@emailjs/browser'

function Success() {
  const [reservation, setReservation] = useState(null)
  const [loading, setLoading] = useState(true)

  const API_URL = "https://serve-usai.vercel.app"

  useEffect(() => {
    const finalizePayment = async () => {
      try {
        const params = new URLSearchParams(window.location.search)
        const session_id = params.get('session_id')

        if (!session_id) return

        const response = await axios.post(
          `${API_URL}/api/stripe/finalize-session`,
          { session_id }
        )

        const reservation = response.data
        setReservation(reservation)

        // 🔥 EMAILJS SEND ICI
        await emailjs.send(
          "service_87ts1wd",
          "template_ny6mqxb",
          {
            to_email: reservation.email,
            to_name: reservation.name,
            email: reservation.email,

            code: reservation.reservationCode,
            total: reservation.totalAmount,
            paid: reservation.paidAmount,
            remaining: reservation.remainingAmount,
            status: reservation.paymentStatus
          },
          "VmE0eCAWlKjxdZBY1"
        )

      } catch (err) {
        console.log(err)
      } finally {
        setLoading(false)
      }
    }

    finalizePayment()
  }, [])

  if (loading) {
    return (
      <div className="success-center">
        <div className="loader" />
        <p>Validation du paiement...</p>
      </div>
    )
  }

  if (!reservation) {
    return (
      <div className="success-center">
        <h1>❌ Erreur de paiement</h1>
        <p>Impossible de récupérer la réservation.</p>
      </div>
    )
  }

  return (
    <section className="success-page">
      {/* HEADER */}
      <div className="success-header">
        <h1>✅ Paiement confirmé</h1>
        <p>Votre réservation a été enregistrée avec succès</p>
      </div>

      {/* MAIN CARD */}
      <div className="success-card">

        {/* SUMMARY */}
        <div className="section">
          <h2>📄 Résumé de la réservation</h2>

          <div className="grid">
            <div className="box">
              <span>Code</span>
              <strong>{reservation.reservationCode}</strong>
            </div>

            <div className="box">
              <span>Email</span>
              <strong>{reservation.email}</strong>
            </div>

            <div className="box">
              <span>Type</span>
              <strong className="badge">
                {reservation.reservationType}
              </strong>
            </div>

            <div className="box">
              <span>Statut</span>
              <strong
                className={`badge ${
                  reservation.paymentStatus === 'completed'
                    ? 'green'
                    : 'orange'
                }`}
              >
                {reservation.paymentStatus}
              </strong>
            </div>
          </div>
        </div>

        {/* PAYMENT */}
        <div className="section">
          <h2>💰 Paiement</h2>

          <div className="grid">
            <div className="box">
              <span>Total</span>
              <strong>{reservation.totalAmount}€</strong>
            </div>

            <div className="box">
              <span>Déjà payé</span>
              <strong className="green">
                {reservation.paidAmount}€
              </strong>
            </div>

            <div className="box">
              <span>Restant</span>
              <strong className="red">
                {reservation.remainingAmount}€
              </strong>
            </div>
          </div>
        </div>

        {/* PARTICIPANTS */}
        <div className="section">
          <h2>👥 Participants</h2>

          <div className="participants">
            {reservation.participants.map((p, index) => (
              <div key={index} className="participant-card">
                <div className="participant-header">
                  <strong>{p.fullName}</strong>
                  <span className="sex">{p.sex}</span>
                </div>

                {p.comment && (
                  <p className="comment">
                    💬 {p.comment}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Success