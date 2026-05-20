import { useEffect } from "react"

function Success() {

  useEffect(() => {
    console.log("Paiement confirmé via Stripe webhook ✔")
  }, [])

  return (
    <div className="success-page">
      <h1>🎉 Paiement confirmé</h1>
      <p>Ta réservation est déjà enregistrée automatiquement.</p>
    </div>
  )
}

export default Success