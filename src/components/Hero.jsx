import { useEffect, useState } from "react"
import "./Hero.css"

function Hero() {
  const targetDate = new Date("2026-09-30T00:00:00")

  const [timeLeft, setTimeLeft] = useState(getTimeLeft())

  function getTimeLeft() {
    const now = new Date()
    const diff = targetDate - now

    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
    const minutes = Math.floor((diff / (1000 * 60)) % 60)
    const seconds = Math.floor((diff / 1000) % 60)

    return { days, hours, minutes, seconds }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <header className="hero">
      <div className="overlay">
        <div className="content">
          <span className="badge">🎉 USAI – Évènement 2026</span>

          <h1>
            Week-end Détente & Cohésion – Riccione
          </h1>

          <p className="subtitle">
            Riccione • 30 Septembre → 4 Octobre 2026
          </p>

          {/* COUNTDOWN */}
          <div className="countdown">
            <div>
              <span>{timeLeft.days}</span>
              <p>Jours</p>
            </div>
            <div>
              <span>{timeLeft.hours}</span>
              <p>Heures</p>
            </div>
            <div>
              <span>{timeLeft.minutes}</span>
              <p>Min</p>
            </div>
            <div>
              <span>{timeLeft.seconds}</span>
              <p>Sec</p>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="buttons">
            <a href="/reservation" className="primary">
              Réserver
            </a>
            <a href="/programme" className="secondary">
              Programme
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Hero