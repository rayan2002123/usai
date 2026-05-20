import { useEffect } from "react"

function Cancel() {

  useEffect(() => {
    console.log("Paiement échoué via Stripe")
  }, [])

  return (
    <div className="success-page">
      <h1> Paiement échoué</h1>
      <p>Ta réservation n'a pas pu etre enregistrée.</p>
    </div>
  )
}

export default Cancel