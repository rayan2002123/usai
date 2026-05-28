import { useEffect, useMemo, useState } from "react"
import axios from "axios"
import { motion } from "framer-motion"
import "./AdminReservations.css"

export default function AdminReservations() {
  const [isAuthorized, setIsAuthorized] = useState(false)
  const [secretCode, setSecretCode] = useState("")

  const [reservations, setReservations] = useState([])

  const [editingId, setEditingId] = useState(null)

  const API_URL = "https://serve-usai.vercel.app"

  const [email, setEmail] = useState("")
  const [reservationType, setReservationType] =
    useState("partial")

  const [participants, setParticipants] = useState([
    {
      fullName: "",
      sex: "M",
      comment: ""
    }
  ])
  
  const [paidAmount, setPaidAmount] =
    useState(0)
  
  const [paymentStatus, setPaymentStatus] =
    useState("partial")
  
  const ADMIN_CODE = "USAI2025"

  // =========================
  // FETCH
  // =========================

  const fetchReservations = async () => {
    try {
      const res = await axios.get(
        `${API_URL}/api/adminreservations`
      )

      setReservations(res.data)

    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchReservations()
  }, [])

  // =========================
  // PARTICIPANTS
  // =========================

  const addParticipant = () => {
    setParticipants([
      ...participants,
      {
        fullName: "",
        sex: "M",
        comment: ""
      }
    ])
  }

  const removeParticipant = (index) => {
    const updated = [...participants]

    updated.splice(index, 1)

    setParticipants(updated)
  }

  const updateParticipant = (
    index,
    field,
    value
  ) => {
    const updated = [...participants]

    updated[index][field] = value

    setParticipants(updated)
  }

  // =========================
  // PRICE
  // =========================

  const totalPrice = useMemo(() => {
    if (reservationType === 'partial') {
      return participants.length * 25
    }

    let total = 0

    participants.forEach((p) => {
      total += p.sex === 'M' ? 100 : 80
    })

    return total
  }, [participants, reservationType])

  const totalRealPrice = participants.reduce(
    (acc, p) => {
      return acc + (p.sex === 'M' ? 100 : 80)
    },
    0
  )

  const remainingPrice =
    totalRealPrice - totalPrice
  // =========================
  // CREATE
  // =========================

  const createReservation = async () => {
    try {

      await axios.post(
        `${API_URL}/api/adminreservations/create`,
       
        {
          email,
          reservationType,
          participants,
          paidAmount
        }
      )

      resetForm()
      setPaymentStatus("partial")

      fetchReservations()

    } catch (err) {
      console.log(err)
    }
  }

  // =========================
  // EDIT
  // =========================

  const startEdit = (reservation) => {

    setEditingId(reservation._id)

    setEmail(reservation.email)

    setPaidAmount( reservation.paidAmount )

    setPaymentStatus(
      reservation.paymentStatus
    )

    setReservationType(
      reservation.reservationType
    )

    setParticipants(
      reservation.participants
    )
  }

  // =========================
  // UPDATE
  // =========================

  const updateReservation = async () => {
    try {

      await axios.put(
        `${API_URL}/api/adminreservations/${editingId}`,
        {
          email,
          reservationType,
          participants,
          paidAmount,
          paymentStatus
        }
      )

      resetForm()
      setPaidAmount(0)

      fetchReservations()

    } catch (err) {
      console.log(err)
    }
  }

  // =========================
  // DELETE
  // =========================

  const deleteReservation = async (id) => {

    if (!window.confirm("Supprimer ?")) return

    try {

      await axios.delete(
        `${API_URL}/api/adminreservations/${id}`
      )

      fetchReservations()

    } catch (err) {
      console.log(err)
    }
  }

  // =========================
  // RESET
  // =========================

  const resetForm = () => {

    setEditingId(null)

    setEmail("")

    setReservationType("partial")

    setParticipants([
      {
        fullName: "",
        sex: "M",
        comment: ""
      }
    ])
  }
  return (
  <>
    {!isAuthorized ? (
      <div className="admin-login">
        <h1>Accès Admin</h1>

        <input
          type="password"
          placeholder="Code secret"
          value={secretCode}
          onChange={(e) => setSecretCode(e.target.value)}
        />

        <button
          onClick={() => {
            if (secretCode === ADMIN_CODE) {
              setIsAuthorized(true)
            } else {
              alert("Code incorrect")
            }
          }}
        >
          Entrer
        </button>
      </div>
    ) : (
      <section className="admin-page">

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Admin Reservations
        </motion.h1>

        {/* FORM */}
        <motion.div
          className="admin-card"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >

          <div className="card-header">
            <h2>
              {editingId
                ? "Modifier réservation"
                : "Créer réservation"}
            </h2>

            <p>Dashboard administrateur</p>
          </div>

          <form className="admin-form">

            {/* EMAIL */}
            <input
              type="email"
              placeholder="Adresse email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {/* TYPE */}
            <select
              value={reservationType}
              onChange={(e) =>
                setReservationType(e.target.value)
              }
            >
              <option value="partial">
                Réservation partielle
              </option>
              <option value="full">
                Paiement complet
              </option>
            </select>

            {/* PARTICIPANTS */}
            {participants.map((person, index) => (
              <div key={index} className="participant-card">

                <div className="participant-header">
                  <h3>Participant {index + 1}</h3>

                  {participants.length > 1 && (
                    <button
                      type="button"
                      className="delete-btn"
                      onClick={() => removeParticipant(index)}
                    >
                      ✕
                    </button>
                  )}
                </div>

                <input
                  type="text"
                  placeholder="Nom complet"
                  value={person.fullName}
                  onChange={(e) =>
                    updateParticipant(index, "fullName", e.target.value)
                  }
                />

                <select
                  value={person.sex}
                  onChange={(e) =>
                    updateParticipant(index, "sex", e.target.value)
                  }
                >
                  <option value="M">Homme</option>
                  <option value="F">Femme</option>
                </select>

                <textarea
                  placeholder="Commentaire"
                  value={person.comment}
                  onChange={(e) =>
                    updateParticipant(index, "comment", e.target.value)
                  }
                />
              </div>
            ))}

            <button
              type="button"
              className="add-btn"
              onClick={addParticipant}
            >
              + Ajouter une personne
            </button>

            {/* PAYMENT */}
            <input
              type="number"
              placeholder="Montant payé"
              value={paidAmount}
              onChange={(e) =>
                setPaidAmount(Number(e.target.value))
              }
            />

            <select
              value={paymentStatus}
              onChange={(e) =>
                setPaymentStatus(e.target.value)
              }
            >
              <option value="partial">Partiel</option>
              <option value="completed">Complété</option>
            </select>

            {/* PRICE BOX */}
            <div className="price-box">
              <h3>Montant à payer maintenant</h3>

              <p>{paidAmount}€</p>

              {reservationType === "partial" && (
                <>
                  <small>
                    Prix total réel : {totalRealPrice}€
                  </small>
                  <br />
                  <small>
                    Restera à payer : {remainingPrice}€
                  </small>
                  <br />
                  <small>
                    100€ homme • 80€ femme
                  </small>
                </>
              )}
            </div>

            {/* BUTTON */}
            <button
              type="button"
              className="btn-primary"
              onClick={
                editingId
                  ? updateReservation
                  : createReservation
              }
            >
              {editingId
                ? "Mettre à jour"
                : "Créer réservation"}
            </button>

          </form>
        </motion.div>

        {/* LIST */}
        <div className="admin-list">

          {reservations.map((r) => (
            <div key={r._id} className="admin-item">

              <h3>{r.email}</h3>

              <p><strong>Code :</strong> {r.reservationCode}</p>
              <p>Total réel : {r.totalAmount}€</p>
              <p>Payé : {r.paidAmount}€</p>
              <p>Restant : {r.remainingAmount}€</p>

              <span className={`status ${r.paymentStatus}`}>
                {r.paymentStatus}
              </span>

              {/* PARTICIPANTS */}
              <div className="preview-participants">
                {r.participants.map((p, i) => (
                  <div key={i} className="preview-card">
                    <strong>{p.fullName}</strong>
                    <p>Sexe : {p.sex}</p>
                    {p.comment && <p>{p.comment}</p>}
                  </div>
                ))}
              </div>

              {/* ACTIONS */}
              <div className="actions">
                <button
                  className="btn-secondary"
                  onClick={() => startEdit(r)}
                >
                  Modifier
                </button>

                <button
                  className="btn-danger"
                  onClick={() => deleteReservation(r._id)}
                >
                  Supprimer
                </button>
              </div>

            </div>
          ))}

        </div>

      </section>
    )}
  </>
)
}
