import { useState } from "react"
import "./Gallery.css"

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  const edition2 = [
    ...Array.from({ length: 14 }, (_, i) => ({
      type: "image",
      src: `/photo${i + 2}.jpeg`
    })),
    { type: "video", src: "/video1.mp4" },
    { type: "video", src: "/video2.mp4" }
  ]

  const edition1 = [
    { type: "image", src: "/photo1.jpeg" },
    ...Array.from({ length: 46 }, (_, i) => ({
      type: "image",
      src: `/photo${i + 16}.jpeg`
    }))
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
            <video 
            src={item.src} controls />
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

      <h2 className="edition-title">🌍 Soirée dans la ville de FERRARA</h2>
      {renderGrid(edition1)}

      <h2 className="edition-title">🏖️ Première édition : Week-END dans la ville de RICCIONE</h2>
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