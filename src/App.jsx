import { Routes, Route } from "react-router-dom"
import { PayPalScriptProvider } from "@paypal/react-paypal-js"

import Home from "./pages/Home"
import Program from "./pages/Program"
import Gallery from "./pages/Gallery"
import Reservation from "./pages/Reservation"
import Help from "./pages/Help"
import Success from "./pages/Success"
import Cancel from "./pages/Cancel"
import Navbar from "./components/Navbar"
import AdminReservations from "./pages/AdminReservations"

function App() {
  return (
    <PayPalScriptProvider
      options={{
        "client-id": "AYDD29rNcxbMbTDnq_PdZvRvKAb-WJ2Vj7U79llOCYPNTLr5rQQMEEZDRgFQmMm6HK1yquK7POIHFNnN",
        currency: "EUR"
      }}
    >
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programme" element={<Program />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/adminreservation" element={<AdminReservations />} />
        <Route path="/adminreservations" element={<AdminReservations />} />
        <Route path="/help" element={<Help />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
      </Routes>
    </PayPalScriptProvider>
  )
}

export default App