function About() {
  return (
    <section style={{ padding: "30px 0" }}>
      {/* HEADER */}
      <div style={{ marginBottom: "30px" }}>
        <h2 style={{ fontSize: "38px", marginBottom: "10px" }}>
          À propos de l’USAI
        </h2>

        <p style={{ fontSize: "18px", color: "var(--text)", lineHeight: "1.6" }}>
          United Students of Africa in Italy (USAI) est une association étudiante
          basée à Riccione, dédiée à la solidarité, l’intégration et la mise en
          valeur des étudiants africains en Italie. L’association organise des 
          activités sociales, des événements culturels, des rencontres éducatives, 
          ainsi que des initiatives visant à renforcer la cohésion, le développement 
          personnel et l’épanouissement de ses membres. United Students of Africa in 
          Italy se veut un espace ouvert, inclusif et convivial, où chacun peut partager 
          ses idées, ses talents et contribuer à des projets collectifs.
        </p>
      </div>

      {/* DESCRIPTION */}
      <div
        style={{
          background: "var(--accent-bg)",
          border: "1px solid var(--accent-border)",
          padding: "20px",
          borderRadius: "16px",
          marginBottom: "25px",
          boxShadow: "var(--shadow)"
        }}
      >
        <p style={{ fontSize: "17px", lineHeight: "1.7" }}>
          Elle vise à promouvoir la solidarité, l’entraide académique, l’intégration 
          culturelle et la création d’un réseau dynamique entre jeunes africains et 
          amis de l’Afrique.
        </p>
      </div>

      {/* OBJECTIFS */}
      <h3 style={{ fontSize: "26px", marginBottom: "15px" }}>
        🎯 Objectifs de l’association
      </h3>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "16px"
        }}
      >
        {[
          {
            icon: "🤝",
            title: "Unité & solidarité",
            text: "Créer un esprit de cohésion et d’entraide entre étudiants d'Italie."
          },
          {
            icon: "🎓",
            title: "Réussite académique",
            text: "Accompagner les étudiants dans leur parcours universitaire."
          },
          {
            icon: "🌍",
            title: "Culture africaine",
            text: "Valoriser la richesse des cultures africaines."
          },
          {
            icon: "🚀",
            title: "Développement personnel",
            text: "Ateliers, formations et montée en compétences."
          },
          {
            icon: "🔗",
            title: "Réseau professionnel",
            text: "Créer des connexions entre étudiants et professionnels."
          },
          {
            icon: "❤️",
            title: "Actions sociales",
            text: "Participer à des projets solidaires en Italie et en Afrique."
          },
          {
            icon: "🗣️",
            title: "Dialogue interculturel",
            text: "Favoriser les échanges entre cultures différentes."
          },
          {
            icon: "🏠",
            title: "Inclusion",
            text: "Un espace ouvert où chacun peut s’exprimer librement."
          }
        ].map((item, i) => (
          <div
            key={i}
            style={{
              background: "var(--bg)",
              border: "1px solid var(--border)",
              borderRadius: "14px",
              padding: "16px",
              boxShadow: "var(--shadow)"
            }}
          >
            <div style={{ fontSize: "24px" }}>{item.icon}</div>

            <h4 style={{ fontSize: "18px", margin: "8px 0" }}>
              {item.title}
            </h4>

            <p style={{ fontSize: "15px", color: "var(--text)", lineHeight: "1.5" }}>
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default About