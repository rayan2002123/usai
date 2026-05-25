import { useEffect } from "react"
import { motion } from "framer-motion"

function Cancel() {

  useEffect(() => {
    console.log("❌ Paiement Stripe annulé ou échoué")
  }, [])

  return (
    <section className="success-page">
      
      {/* HEADER STATUS */}
      <motion.div
        className="success-card"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 style={{ color: "#e74c3c" }}>
          ❌ Paiement non complété
        </h1>

        <p style={{ marginTop: "10px", fontSize: "16px" }}>
          Votre transaction a été annulée ou n’a pas pu être finalisée.
        </p>
      </motion.div>

      {/* EXPLICATION */}
      <motion.div
        className="success-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2>Que s’est-il passé ?</h2>

        <div className="details-grid">
          <div>
            <strong>Statut :</strong>
            <p>Échec du paiement Stripe</p>
          </div>

          <div>
            <strong>Réservation :</strong>
            <p>Non confirmée</p>
          </div>

          <div>
            <strong>Conséquence :</strong>
            <p>Aucune donnée n’a été validée en base de données</p>
          </div>
        </div>
      </motion.div>

      {/* ACTIONS */}
      <motion.div
        className="success-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2>Que pouvez-vous faire ?</h2>

        <ul style={{ lineHeight: "1.8" }}>
          <li>🔁 Réessayer le paiement</li>
          <li>💳 Vérifier votre carte bancaire</li>
          <li>🌐 Vérifier votre connexion internet</li>
          <li>📩 Contacter le support si le problème persiste</li>
        </ul>
      </motion.div>

      {/* BOUTON RETRY (optionnel UX ++) */}
      <motion.div
        className="success-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <button
          onClick={() => window.location.href = "/reservation"}
          style={{
            padding: "12px 20px",
            background: "#e74c3c",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >
          🔁 Réessayer la réservation
        </button>
      </motion.div>

    </section>
  )
}

export default Cancel