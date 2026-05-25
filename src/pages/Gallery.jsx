import { useState } from "react"
import "./Gallery.css"

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  // 🏖️ RICCIONE 2025
  const edition2 = [
    { type: "image", src: "/photo001.jpeg" },
    { type: "image", src: "/photo002.jpeg" },
    { type: "image", src: "/photo003.jpeg" },
    { type: "image", src: "/photo2.jpeg" },
    { type: "image", src: "/photo3.jpeg" },
    { type: "image", src: "/photo4.jpeg" },
    { type: "image", src: "/photo5.jpeg" },
    { type: "image", src: "/photo7.jpeg" },
    { type: "image", src: "/photo8.jpeg" },
    { type: "image", src: "/photo9.jpeg" },
    { type: "image", src: "/photo10.jpeg" },
    { type: "image", src: "/photo11.jpeg" },
    { type: "image", src: "/photo12.jpeg" },
    { type: "image", src: "/photo13.jpeg" },
    { type: "image", src: "/photo14.jpeg" },
    { type: "image", src: "/photo15.jpeg" },
  ]

  // 🌍 FERRARA 2024
  const edition1 = [
    { type: "image", src: "/photo1.jpeg" },
    { type: "image", src: "/photo16.jpeg" },
    { type: "image", src: "/photo17.jpeg" },
    { type: "image", src: "/photo18.jpeg" },
    { type: "image", src: "/photo19.jpeg" },
    { type: "image", src: "/photo20.jpeg" },
    { type: "image", src: "/photo22.jpeg" },
    { type: "image", src: "/photo23.jpeg" },
    { type: "image", src: "/photo25.jpeg" },
    { type: "image", src: "/photo27.jpeg" },
    { type: "image", src: "/photo28.jpeg" },
    { type: "image", src: "/photo29.jpeg" },
    { type: "image", src: "/photo32.jpeg" },
    { type: "image", src: "/photo33.jpeg" },
    { type: "image", src: "/photo34.jpeg" },
    { type: "image", src: "/photo36.jpeg" },
    { type: "image", src: "/photo38.jpeg" },
    { type: "image", src: "/photo39.jpeg" },
    { type: "image", src: "/photo40.jpeg" },
    { type: "image", src: "/photo41.jpeg" },
    { type: "image", src: "/photo42.jpeg" },
    { type: "image", src: "/photo43.jpeg" },
    { type: "image", src: "/photo45.jpeg" },
    { type: "image", src: "/photo46.jpeg" },
    { type: "image", src: "/photo47.jpeg" },
    { type: "image", src: "/photo48.jpeg" },
    { type: "image", src: "/photo49.jpeg" },
    { type: "image", src: "/photo50.jpeg" },
    { type: "image", src: "/photo51.jpeg" },
    { type: "image", src: "/photo52.jpeg" },
    { type: "image", src: "/photo53.jpeg" },
    { type: "image", src: "/photo54.jpeg" },
    { type: "image", src: "/photo56.jpeg" },
    { type: "image", src: "/photo58.jpeg" },
    { type: "image", src: "/photo59.jpeg" },
    { type: "image", src: "/photo60.jpeg" },
    { type: "image", src: "/photo61.jpeg" },
  ]

  const openImage = (src) => setSelectedImage(src)
  const closeImage = () => setSelectedImage(null)

  const renderGrid = (media) => (
    <div className="grid">
      {media.map((item, i) => (
        <div key={i} className="card">
          {item.type === "image" ? (
            <img
              src={item.src}
              alt="gallery"
              onClick={() => openImage(item.src)}
            />
          ) : (
            <video src={item.src} controls />
          )}
        </div>
      ))}
    </div>
  )

  return (
    <section className="gallery">
      <h1>📸 Galerie Photos & Vidéos</h1>

      <p className="subtitle">
        Moments forts des événements USAI
      </p>

      <h2 className="edition-title">🌍 FERRARA 2024</h2>
      {renderGrid(edition1)}

      <h2 className="edition-title">🏖️ RICCIONE 2025</h2>
      {renderGrid(edition2)}

      {/* 🔥 LIGHTBOX */}
      {selectedImage && (
        <div className="lightbox" onClick={closeImage}>
          <img
            src={selectedImage}
            alt="preview"
            onClick={(e) => e.stopPropagation()}
          />
          <button className="close" onClick={closeImage}>
            ✖
          </button>
        </div>
      )}
    </section>
  )
}

export default Gallery