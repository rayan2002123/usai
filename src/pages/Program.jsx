const program = [
  {
    day: "🌅 Mercredi 30-09",
    tone: "var(--accent-bg)",
    border: "var(--accent-border)",
    image:
      "https://teambooking.fr/wp-content/uploads/2024/02/pourquoi-organiser-un-diner-dequipe-pour-booster-la-cohesion-et-favoriser-lepanouissement-professionnel.jpg",
    activities: [
      {
        text: "📍 Arrivée et installation du groupe",
        img: "https://cdn-icons-png.flaticon.com/512/854/854878.png"
      },
      {
        text: "🍽️ Dîner de retrouvailles (BBQ & convivialité)",
        img: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
      },
      {
        text: "🎮 Babyfoot & tennis de table",
        img: "https://cdn-icons-png.flaticon.com/512/857/857455.png"
      },
      {
        text: "🎲 Jeux de société en équipe",
        img: "https://cdn-icons-png.flaticon.com/512/1087/1087840.png"
      },
      {
        text: "💬 Discussions, échanges & débats",
        img: "https://cdn-icons-png.flaticon.com/512/1828/1828817.png"
      }
    ]
  },
  {
    day: "🏖️ Jeudi 01-10",
    tone: "rgba(59, 130, 246, 0.08)",
    border: "rgba(59, 130, 246, 0.35)",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    activities: [
      {
        text: "🍳 Petit déjeuner convivial (8h - 10h)",
        img: "https://cdn-icons-png.flaticon.com/512/1147/1147803.png"
      },
      {
        text: "🏆 Création des équipes sportives",
        img: "https://cdn-icons-png.flaticon.com/512/857/857455.png"
      },
      {
        text: "🏝️ Départ et installation sur la plage",
        img: "https://cdn-icons-png.flaticon.com/512/727/727606.png"
      },
      {
        text: "⚽ Jeux et défis sportifs sur la plage",
        img: "https://cdn-icons-png.flaticon.com/512/53/53283.png"
      },
      {
        text: "🍽️ Déjeuner sur la plage",
        img: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
      },
      {
        text: "🌞 Temps libre, détente & bronzage",
        img: "https://cdn-icons-png.flaticon.com/512/869/869869.png"
      }
    ]
  },
  {
    day: "🎢 Vendredi 02-10",
    tone: "rgba(168, 85, 247, 0.08)",
    border: "rgba(168, 85, 247, 0.35)",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    activities: [
      {
        text: "🍳 Petit déjeuner énergie",
        img: "https://cdn-icons-png.flaticon.com/512/1147/1147803.png"
      },
      {
        text: "🎒 Préparation de la journée aventure",
        img: "https://cdn-icons-png.flaticon.com/512/679/679720.png"
      },
      {
        text: "🎢 Journée Riccione Aventura",
        img: "https://cdn-icons-png.flaticon.com/512/235/235861.png"
      },
      {
        text: "🚐 Retour au camp",
        img: "https://cdn-icons-png.flaticon.com/512/61/61168.png"
      },
      {
        text: "🍽️ Dîner collectif",
        img: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
      },
      {
        text: "🎮 Soirée jeux & détente",
        img: "https://cdn-icons-png.flaticon.com/512/2991/2991606.png"
      }
    ]
  },
  {
    day: "⚽ Samedi 03-10",
    tone: "rgba(249, 115, 22, 0.08)",
    border: "rgba(249, 115, 22, 0.35)",
    image:
      "https://cdn.futura-sciences.com/buildsv6/images/wide1920/f/4/5/f45b282976_50155841_fc-barcelone-christopher-wagner-flickr.jpg",
    activities: [
      {
        text: "🏃 Activités sportives en plein air",
        img: "https://cdn-icons-png.flaticon.com/512/857/857455.png"
      },
      {
        text: "⚽ Match USAI vs Riccione",
        img: "https://cdn-icons-png.flaticon.com/512/53/53283.png"
      },
      {
        text: "🏛️ Installation de la salle",
        img: "https://cdn-icons-png.flaticon.com/512/25/25694.png"
      },
      {
        text: "🎤 Soirée officielle & discours",
        img: "https://cdn-icons-png.flaticon.com/512/15/15874.png"
      },
      {
        text: "🍽️ Dîner festif",
        img: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
      },
      {
        text: "🎉 Ndjoka & soirée finale",
        img: "https://cdn-icons-png.flaticon.com/512/727/727245.png"
      }
    ]
  },
  {
    day: "🌍 Dimanche 04",
    tone: "rgba(34, 197, 94, 0.08)",
    border: "rgba(34, 197, 94, 0.35)",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
    activities: [
      {
        text: "🍽️ Déjeuner de clôture (12h - 14h)",
        img: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
      },
      {
        text: "🚶 Départ des participants (15h)",
        img: "https://cdn-icons-png.flaticon.com/512/61/61205.png"
      }
    ]
  }
]

export default function Program() {
  return (
    <section style={{ padding: "24px 0" }}>
      <h1 style={{ fontSize: "42px", marginBottom: "20px" }}>
        📅 Programme du séjour
      </h1>

      <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
        {program.map((item, index) => (
          <div
            key={index}
            style={{
              background: item.tone,
              border: `1px solid ${item.border}`,
              borderRadius: "18px",
              padding: "22px",
              textAlign: "left",
              boxShadow: "var(--shadow)"
            }}
          >
            {/* TITRE */}
            <h2 style={{ fontSize: "26px", marginBottom: "12px" }}>
              {item.day}
            </h2>

            {/* IMAGE PRINCIPALE */}
            <div
              style={{
                width: "100%",
                height: "200px",
                borderRadius: "14px",
                overflow: "hidden",
                marginBottom: "14px"
              }}
            >
              <img
                src={item.image}
                alt={item.day}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }}
              />
            </div>

            {/* ACTIVITÉS */}
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {item.activities.map((act, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "10px",
                    fontSize: "16px",
                    color: "var(--text)",
                    lineHeight: "1.5"
                  }}
                >
                  <img
                    src={act.img}
                    alt=""
                    style={{
                      width: "20px",
                      height: "20px",
                      opacity: 0.9
                    }}
                  />
                  <span>{act.text}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}