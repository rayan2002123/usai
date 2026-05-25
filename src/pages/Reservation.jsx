import { useMemo, useState } from 'react'
import axios from 'axios'
import { motion } from 'framer-motion'
import './Reservation.css'

function Reservation() {
  const [reservationType, setReservationType] =
    useState('partial')

  const [email, setEmail] = useState('')

  const [participants, setParticipants] = useState([
    {
      fullName: '',
      sex: 'M',
      comment: ''
    }
  ])

  const [loading, setLoading] = useState(false)

  const [stripeLoading, setStripeLoading] =
    useState(false)

  const [reservationCode, setReservationCode] =
    useState('')

  const [reservationData, setReservationData] =
    useState(null)

  const [message, setMessage] = useState('')

  // =========================
  // PARTICIPANTS
  // =========================

  const addParticipant = () => {
    setParticipants([
      ...participants,
      {
        fullName: '',
        sex: 'M',
        comment: ''
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
  // CREATE RESERVATION
  // =========================

  const handleReservation = async () => {
    if (loading) return

    try {
      setLoading(true)

      const response = await axios.post(
        'http://localhost:5000/api/reservations/create',
        {
          email,
          reservationType,
          participants
        }
      )

      setMessage(
        'Réservation créée avec succès'
      )

      alert(
        reservationType === 'partial'
          ? `Réservation partielle créée.\nCode : ${response.data.reservationCode}`
          : 'Réservation complète confirmée'
      )
    } catch (err) {
      console.log(err)

      alert('Erreur serveur')
    } finally {
      setLoading(false)
    }
  }

  // =========================
  // FIND RESERVATION
  // =========================

  const findReservation = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/reservations/${reservationCode}`
      )

      setReservationData(response.data)
    } catch (err) {
      console.log(err)

      alert('Code invalide')
    }
  }

  // =========================
  // FINALIZE RESERVATION
  // =========================

  const finalizeReservation = async () => {
    if (stripeLoading) return

    try {
      setStripeLoading(true)

      // ✅ montant restant
      const amount =
        reservationData.remainingAmount

      // ✅ création session Stripe
      const response = await axios.post(
        'http://localhost:5000/api/stripe/create-checkout-session',
        {
          amount,
          email: reservationData.email,
          reservationId: reservationData._id
        }
      )

      // ✅ redirect stripe
      window.location.href =
        response.data.url
    } catch (err) {
      console.log(err)
      alert('Erreur Stripe')
    } finally {
      setStripeLoading(false)
    }
  }

  // =========================
  // STRIPE
  // =========================

  const handleStripeCheckout = async () => {
    if (stripeLoading) return

    try {
      setStripeLoading(true)

      // 1. CREATE RESERVATION FIRST
      const reservationResponse =
        await axios.post(
          'http://localhost:5000/api/reservations/create',
          {
            email,
            reservationType,
            participants
          }
        )

      const reservation =
        reservationResponse.data

      // 2. CREATE STRIPE SESSION
      const stripeResponse =
        await axios.post(
          'http://localhost:5000/api/stripe/create-checkout-session',
          {
            amount: totalPrice,
            email,
            reservationId:
              reservation._id // ✅ maintenant ça existe
          }
        )

      // 3. REDIRECT
      window.location.href =
        stripeResponse.data.url
    } catch (err) {
      console.log(err)
      alert('Erreur Stripe')
    } finally {
      setStripeLoading(false)
    }
  }

  return (
    <section className='reservation-page'>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Réservation Riccione 2025
      </motion.h1>

      {/* CREATE RESERVATION */}

      <motion.div
        className='reservation-card'
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className='card-header'>
          <h2>Nouvelle réservation</h2>

          <p>
            Réservation partielle ou paiement
            complet
          </p>
        </div>

        <form>
          {/* EMAIL */}

          <input
            type='email'
            placeholder='Adresse email'
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          {/* TYPE */}

          <select
            value={reservationType}
            onChange={(e) =>
              setReservationType(e.target.value)
            }
          >
            <option value='partial'>
              Réservation partielle
            </option>

            <option value='full'>
              Paiement complet
            </option>
          </select>

          {/* PARTICIPANTS */}

          {participants.map((person, index) => (
            <div
              key={index}
              className='participant-card'
            >
              <div className='participant-header'>
                <h3>
                  Participant {index + 1}
                </h3>

                {participants.length > 1 && (
                  <button
                    type='button'
                    className='delete-btn'
                    onClick={() =>
                      removeParticipant(index)
                    }
                  >
                    ✕
                  </button>
                )}
              </div>

              <input
                type='text'
                placeholder='Nom complet'
                value={person.fullName}
                onChange={(e) =>
                  updateParticipant(
                    index,
                    'fullName',
                    e.target.value
                  )
                }
              />

              <select
                value={person.sex}
                onChange={(e) =>
                  updateParticipant(
                    index,
                    'sex',
                    e.target.value
                  )
                }
              >
                <option value='M'>
                  Homme
                </option>

                <option value='F'>
                  Femme
                </option>
              </select>

              <textarea
                placeholder='Préférences / commentaire'
                value={person.comment}
                onChange={(e) =>
                  updateParticipant(
                    index,
                    'comment',
                    e.target.value
                  )
                }
              />
            </div>
          ))}

          <button
            type='button'
            className='add-btn'
            onClick={addParticipant}
          >
            + Ajouter une personne
          </button>

          {/* PRICE */}

          <div className='price-box'>
            <h3>Montant à payer maintenant</h3>

            <p>{totalPrice}€</p>

            {reservationType === 'partial' && (
              <>
                <small>
                  Prix total réel :
                  {totalRealPrice}€
                </small>

                <br />

                <small>
                  Restera à payer :
                  {remainingPrice}€
                </small>

                <br />

                <small>
                  100€ homme • 80€ femme
                </small>
              </>
            )}
          </div>

          {/* STRIPE */}

          <button
            type='button'
            className='stripe-btn'
            onClick={handleStripeCheckout}
            disabled={stripeLoading}
          >
            {stripeLoading
              ? 'Redirection...'
              : 'Payer avec carte bancaire'}
          </button>

          {message && (
            <p className='success-message'>
              {message}
            </p>
          )}
        </form>
      </motion.div>

      {/* FINALIZE */}

      <motion.div
        className='reservation-card final'
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className='card-header'>
          <h2>Finaliser une réservation</h2>

          <p>
            Entrez votre code de réservation
          </p>
        </div>

        <input
          type='text'
          placeholder='USAI-XXXXXX'
          value={reservationCode}
          onChange={(e) =>
            setReservationCode(e.target.value)
          }
        />

        <button
          className='submit-btn'
          onClick={findReservation}
        >
          Rechercher
        </button>

        {reservationData && (
          <div className='reservation-details'>
            <h3>
              Réservation trouvée
            </h3>

            <div className='details-grid'>
              <div>
                <strong>Email :</strong>
                <p>
                  {reservationData.email}
                </p>
              </div>

              <div>
                <strong>Code :</strong>
                <p>
                  {
                    reservationData.reservationCode
                  }
                </p>
              </div>

              <div>
                <strong>Total :</strong>
                <p>
                  {
                    reservationData.totalAmount
                  }
                  €
                </p>
              </div>

              <div>
                <strong>Déjà payé :</strong>
                <p>
                  {reservationData.paidAmount}€
                </p>
              </div>

              <div>
                <strong>Restant :</strong>
                <p className='remaining'>
                  {
                    reservationData.remainingAmount
                  }
                  €
                </p>
              </div>

              <div>
                <strong>Status :</strong>
                <p>
                  {
                    reservationData.paymentStatus
                  }
                </p>
              </div>
            </div>

            {/* PARTICIPANTS */}

            <div className='participants-preview'>
              <h4>Participants</h4>

              {reservationData.participants.map(
                (p, index) => (
                  <div
                    key={index}
                    className='preview-card'
                  >
                    <p>
                      <strong>
                        {p.fullName}
                      </strong>
                    </p>

                    <p>
                      Sexe : {p.sex}
                    </p>

                    {p.comment && (
                      <p>
                        Préférences :
                        {p.comment}
                      </p>
                    )}
                  </div>
                )
              )}
            </div>

            {/* FINAL PAYMENT */}

            {reservationData.remainingAmount >
              0 && (
              <button
                className='stripe-btn'
                onClick={finalizeReservation}
                disabled={stripeLoading}
              >
                {stripeLoading
                  ? 'Chargement...'
                  : 'Finaliser le paiement'}
              </button>
            )}
          </div>
        )}
      </motion.div>
    </section>
  )
}

export default Reservation