import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import PropTypes from "prop-types";
import { fetchCatImages } from "../services/catService";
import AOS from "aos";
import "aos/dist/aos.css";

const translations = {
  es: {
    galleryTitle: "Galería Gatuna",
  },
  en: {
    galleryTitle: "Cats Gallery",
  },
};

function ImageGrid({ language, toggleLanguage }) {
  const [images, setImages] = useState([]);
  const t = translations[language] || translations["es"];

  // Inicializa AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  // Carga las imágenes
  useEffect(() => {
    const getImages = async () => {
      try {
        const data = await fetchCatImages(12); // Obtener 12 imágenes
        console.log("Images fetched:", data);
        setImages(data);
      } catch (error) {
        console.error("Error fetching cat images:", error);
      }
    };

    getImages();
  }, []);

  // Refresca AOS después de que las imágenes se carguen
  useEffect(() => {
    if (images.length > 0) {
      AOS.refresh();
    }
  }, [images]);

  return (
    <section id="grid" className="py-5">
      <Container className="min-vh-100">
        <h2 className="text-center">{t.galleryTitle}</h2>
        <Row className="g-4">
          {images.map((image) => (
            <Col
              key={image.id}
              xs={6}
              md={4}
              lg={3}
              data-aos="fade-right" // Animación individual para cada columna
              data-aos-duration="1000"
            >
              <div className="image-card">
                <img
                  src={image.url}
                  alt="Cat"
                  className="img-fluid rounded"
                  style={{
                    height: "200px",
                    objectFit: "cover",
                    transition: "transform 0.3s ease-in-out",
                  }}
                />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

ImageGrid.propTypes = {
  language: PropTypes.string.isRequired,
  toggleLanguage: PropTypes.func.isRequired,
};

export default ImageGrid;
