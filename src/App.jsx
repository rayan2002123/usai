import { Routes, Route } from "react-router-dom"
import { PayPalScriptProvider } from "@paypal/react-paypal-js"

import Home from "./pages/Home"
import Program from "./pages/Program"
import Gallery from "./pages/Gallery"
import Reservation from "./pages/Reservation"
import Success from "./pages/Success"
import Cancel from "./pages/Cancel"
import Navbar from "./components/Navbar"

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
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
      </Routes>
    </PayPalScriptProvider>
  )
}

export default App