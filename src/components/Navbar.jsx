import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import "./Navbar.css"

function Navbar() {
  const [open, setOpen] = useState(false)
  const [hide, setHide] = useState(false)
  const location = useLocation()

  const closeMenu = () => setOpen(false)

  // 🔥 hide navbar on scroll down
  useEffect(() => {
    let lastScroll = window.scrollY

    const handleScroll = () => {
      const currentScroll = window.scrollY

      if (currentScroll > lastScroll && currentScroll > 80) {
        setHide(true)
      } else {
        setHide(false)
      }

      lastScroll = currentScroll
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto"
  }, [open])

  return (
    <nav className={`navbar ${hide ? "hide" : ""}`}>
      <div className="logo">
        <img src="https://cdn.corenexis.com/files/c/2955455720.png" alt="USAI" />
      </div>

      {/* BURGER */}
      <div
        className={`burger ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* LINKS */}
      <div className={`links ${open ? "open" : ""}`}>
        <Link onClick={closeMenu} className={location.pathname === "/" ? "active" : ""} to="/">
          Accueil
        </Link>

        <Link onClick={closeMenu} className={location.pathname === "/programme" ? "active" : ""} to="/programme">
          Programme
        </Link>

        <Link onClick={closeMenu} className={location.pathname === "/gallery" ? "active" : ""} to="/gallery">
          Galerie
        </Link>

        <Link onClick={closeMenu} className={location.pathname === "/reservation" ? "active" : ""} to="/reservation">
          Réservation
        </Link>

        <Link onClick={closeMenu} className={location.pathname === "/help" ? "active" : ""} to="/help">
          Help
        </Link>

        <Link onClick={closeMenu} className={location.pathname === "/adminreservations" ? "active" : ""} to="/adminreservations">
          Admin
        </Link>
        
      </div>
    </nav>
  )
}

export default Navbar