import { useEffect, useRef, useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import emailjs from "@emailjs/browser"
import "./help.css"
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt
} from "react-icons/fa"

const FAQ = [
  { keywords: ["octobre", "pourquoi"], answer: "Octobre permet à tout le monde de participer, de profiter du beau temps et de se détendre avant la reprise scolaire ou professionnelle. Et Août est un mois où la plupart des étudiants cherche du travail et ne sont pas disponible. Vu les editions précedentes, le mois d'Octobre est le plus favorable." },
  { keywords: ["participants"], answer: "Qui peut participer ? Tous les membres de l’USAI, étudiants, travailleurs ou nouveaux arrivants. Puis‑je venir avec un ami qui n’est pas membre ? Oui l’événement est ouvert à tous" },
  { keywords: ["logement"], answer: "Le logement est inclus et garanti pour tout les participants." },
  { keywords: ["activités"], answer: " Plage & soleil, Parcs d’attractions, Sports : basket, handball, football, beach tennis…, Jeux de société, Karaoké (nouvellement rénové), Salle de jeux, Ambiance africaine, musique, danse, Activités d’intérieur variées, Puis‑je proposer une activité ? Oui. Les suggestions sont les bienvenues tant qu’elles respectent l’esprit du séjour." },
  { keywords: ["transport"], answer: "Le transport est‑il inclus ? Non, sauf pour les filles ayant participé à Riccione 2025." },
  { keywords: ["prix", "coût", "combien"], answer: "100€ garçons / 80€ filles." }
]

const quickQuestions = [
  "Pourquoi octobre ?",
  "Combien pour participer ?",
  "Logement ?",
  "Activités ?",
  "Transport ?",
  "Participants et Conditions"
]

export default function Help() {

  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Salut 👋 Je suis ton assistant USAI"
    }
  ])

  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  })

  const chatRef = useRef(null)

  const findAnswer = (text) => {
    const msg = text.toLowerCase()

    const found = FAQ.find(item =>
      item.keywords.some(k => msg.includes(k))
    )

    return found?.answer || "Je n’ai pas compris 🤔"
  }

  const sendMessage = (value) => {
    const text = value || input
    if (!text.trim()) return

    setMessages(prev => [...prev, { from: "user", text }])
    setInput("")
    setLoading(true)

    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { from: "bot", text: findAnswer(text) }
      ])
      setLoading(false)
    }, 500)
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const sendContactMessage = (e) => {
    e.preventDefault()

    emailjs.send(
      "service_5ezyp6c",
      "template_albskrb",
      {
        from_name: form.name,
        from_email: form.email,
        message: form.message,

        // IMPORTANT
        to_email: "unitedstudentsafricaitalia@gmail.com"
      },
      "VmE0eCAWlKjxdZBY1"
    )
    .then(() => {
      alert("Message envoyé avec succès ✅")

      setForm({
        name: "",
        email: "",
        message: ""
      })
    })
    .catch((error) => {
      console.error(error)
      alert("Erreur lors de l'envoi")
    })
  }

  useEffect(() => {
    chatRef.current?.scrollTo({
      top: chatRef.current.scrollHeight,
      behavior: "smooth"
    })
  }, [messages, loading])

  const quick = useMemo(() => quickQuestions, [])

  return (
    <section className="help-page">

      <motion.div
        className="help-card"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >

        {/* HEADER */}
        <div className="help-header">
          <span className="help-badge">Assistant IA</span>
          <h1>Help Center</h1>
          <p>Pose ta question instantanément</p>
        </div>

        {/* QUICK */}
        <div className="help-quick">
          {quick.map((q, i) => (
            <button
              key={i}
              className="help-chip"
              onClick={() => sendMessage(q)}
            >
              {q}
            </button>
          ))}
        </div>

        {/* CHAT */}
        <div className="help-chat" ref={chatRef}>

          <AnimatePresence>
            {messages.map((msg, i) => (
              <motion.div
                key={i}
                className={`help-msg ${msg.from}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                <span className="help-avatar">
                  {msg.from === "user" ? "🧑" : "🤖"}
                </span>
                <span>{msg.text}</span>
              </motion.div>
            ))}
          </AnimatePresence>

          {loading && (
            <div className="help-msg bot">
              <span className="help-avatar">🤖</span>
              <span>écrit...</span>
            </div>
          )}

        </div>

      </motion.div>

      {/* CONTACT */}

      <motion.div
        className="help-contact-card"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >

        <div className="help-contact-header">
          <span className="help-badge">
            Contact
          </span>

          <h2>Besoin d’aide ?</h2>

          <p>
            Contactez-nous directement
          </p>
        </div>

        <div className="help-contact-wrapper">

          {/* LEFT */}

          <div className="help-contact-info">

            <a
              href="mailto:rngasseu123@gmail.com"
              className="help-contact-item"
            >
              <FaEnvelope />
              unitedstudentsafricaitalia@gmail.com
            </a>

            <a
              href="https://wa.me/393532037583"
              className="help-contact-item"
            >
              WhatsApp
            </a>

            <div className="help-contact-item">
              <FaMapMarkerAlt />
              Italy, Riccione
            </div>

            <a
              href="tel:+393532037583"
              className="help-contact-item"
            >
              <FaPhoneAlt />
              +39 353 203 7583
            </a>

            <a
              href="tel:+393517578642"
              className="help-contact-item"
            >
              <FaPhoneAlt />
              +39 351 757 8642
            </a>

            <a
              href="tel:+393792182036"
              className="help-contact-item"
            >
              <FaPhoneAlt />
              +39 379 218 2036
            </a>

          </div>

          {/* FORM */}

          <form
            className="help-contact-form"
            onSubmit={sendContactMessage}
          >

            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Votre nom"
            />

            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Votre email"
            />

            <textarea
              name="message"
              rows="6"
              value={form.message}
              onChange={handleChange}
              placeholder="Votre message..."
            />

            <button type="submit">
              Envoyer le message
            </button>

          </form>

        </div>

      </motion.div>

    </section>
  )
}