function Event() {
  return (
    <section style={{ padding: "30px 0" }}>
      {/* HEADER */}
      <h2 style={{ fontSize: "38px", marginBottom: "10px" }}>
        🎉 Présentation de l’évènement fare 2026
      </h2>

      <p style={{ fontSize: "18px", color: "var(--text)", lineHeight: "1.6" }}>
       <strong>Week-end Détente & Cohésion – Riccione</strong> : C'est une initiative 
        organisée par l’association United Students of Africa in Italy (USAI). Il s’agit d’un 
        séjour de quatre jours, pensé pour offrir aux étudiants et jeunes travailleurs un 
        moment de repos, de convivialité et de partage avant le début de l’année académique et 
        professionnelle. Cet événement se déroule à Riccione, l’une des villes balnéaires les 
        plus dynamiques d’Italie, connue pour son ambiance chaleureuse, ses plages, ses activités 
        et son atmosphère festive.
      </p>

      {/* HERO INFO */}
      <div
        style={{
          marginTop: "20px",
          padding: "18px",
          borderRadius: "16px",
          background: "var(--accent-bg)",
          border: "1px solid var(--accent-border)",
          boxShadow: "var(--shadow)"
        }}
      >
        <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
          📍 <strong>Lieu :</strong> Riccione, Italie <br />
          📅 <strong>Dates :</strong> 1 → 4 octobre 2026 <br />
          🌅 <strong>Arrivée :</strong> possible le 30 septembre au soir <br />
          🚶 <strong>Départ :</strong> après déjeuner le dimanche 04
        </p>
      </div>

      {/* OBJECTIFS */}
      <h3 style={{ fontSize: "26px", marginTop: "30px" }}>
        🎯 Objectifs principaux
      </h3>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "16px",
          marginTop: "15px"
        }}
      >
        {[
          {
            icon: "🤝",
            title: "Cohésion du groupe",
            text: "Créer des liens forts entre étudiants et jeunes actifs."
          },
          {
            icon: "🧠",
            title: "Bien-être",
            text: "Réduire le stress et recharger les énergies."
          },
          {
            icon: "🌍",
            title: "Esprit culturel",
            text: "Recréer une ambiance africaine chaleureuse."
          },
          {
            icon: "🚀",
            title: "Engagement",
            text: "Renforcer la participation à la vie associative."
          }
        ].map((item, i) => (
          <div
            key={i}
            style={{
              padding: "16px",
              borderRadius: "14px",
              background: "var(--bg)",
              border: "1px solid var(--border)",
              boxShadow: "var(--shadow)"
            }}
          >
            <div style={{ fontSize: "24px" }}>{item.icon}</div>
            <h4 style={{ fontSize: "18px", margin: "8px 0" }}>
              {item.title}
            </h4>
            <p style={{ fontSize: "15px", color: "var(--text)" }}>
              {item.text}
            </p>
          </div>
        ))}
      </div>

      {/* ACTIVITES */}
      <h3 style={{ fontSize: "26px", marginTop: "30px" }}>
        🎯 Activités du séjour
      </h3>

      <div
        style={{
          marginTop: "15px",
          padding: "18px",
          borderRadius: "16px",
          background: "rgba(0,0,0,0.03)",
          border: "1px solid var(--border)",
          lineHeight: "1.8",
          fontSize: "16px"
        }}
      >
        ⚽ Sports : football, basketball, handball, beach tennis <br />
        🏖️ Plage & détente <br />
        🎢 Parcs d’attractions <br />
        🎲 Jeux de société <br />
        🎤 Karaoké & musique <br />
        🎮 Salle de jeux <br />
        🍽️ Cuisine africaine & convivialité <br />
        🎉 Ambiance festive & culturelle
      </div>

      {/* PARTICIPATION */}
      <h3 style={{ fontSize: "26px", marginTop: "30px" }}>
        💰 Participation financière
      </h3>

      <div
        style={{
          display: "flex",
          gap: "12px",
          marginTop: "10px",
          flexWrap: "wrap"
        }}
      >
        <div
          style={{
            padding: "14px 16px",
            borderRadius: "12px",
            background: "var(--accent-bg)",
            border: "1px solid var(--accent-border)"
          }}
        >
          👦 100€ pour les Hommes
        </div>

        <div
          style={{
            padding: "14px 16px",
            borderRadius: "12px",
            background: "var(--accent-bg)",
            border: "1px solid var(--accent-border)"
          }}
        >
          👧 80€ pour les Femmes
        </div>
      </div>

      {/* BONUS */}
      <div
        style={{
          marginTop: "25px",
          padding: "16px",
          borderRadius: "14px",
          background: "rgba(34,197,94,0.1)",
          border: "1px solid rgba(34,197,94,0.4)"
        }}
      >
        🎁 <strong>Bonus spécial :</strong> Le transport des filles de Riccione 2025
         est pris en charge par la présidence ✔️
      </div>

      {/* CONCLUSION */}
      <div
        style={{
          marginTop: "30px",
          padding: "18px",
          borderRadius: "16px",
          background: "var(--accent-bg)",
          border: "1px solid var(--accent-border)",
          fontSize: "16px",
          lineHeight: "1.6"
        }}
      >
        ✨ <strong>Esprit de l’évènement :</strong> Riccione 2026 est bien plus
        qu’un séjour. C’est une expérience humaine, une famille, une parenthèse
        de bonheur et un moment de connexion culturelle unique.
      </div>
    </section>
  )
}

export default Event