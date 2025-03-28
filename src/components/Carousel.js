import React, { useState, useEffect } from "react";
import { Carousel, Spinner, Container, Row, Col } from "react-bootstrap";
import { fetchCatImages } from "../services/catService";
import AOS from "aos";
import "aos/dist/aos.css";

function ImageCarousel() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  // Inicializa AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  // Refresca AOS después de cargar las imágenes
  useEffect(() => {
    if (!loading) {
      AOS.refresh();
    }
  }, [loading]);

  // Carga las imágenes
  useEffect(() => {
    const getImages = async () => {
      try {
        const data = await fetchCatImages(6); // Obtener 6 imágenes
        setImages(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching cat images:", error);
        setLoading(false);
      }
    };

    getImages();
  }, []);

  return (
    <section id="carousel" className="py-5">
      <Container fluid className="min-vh-100">
        <Row className="justify-content-center">
          <Col xs={12} data-aos="fade-left" data-aos-duration="1000">
            {loading ? (
              <div className="carousel-loader text-center">
                <Spinner animation="border" variant="primary" />
                <p className="mt-3">Cargando imágenes de gatos...</p>
              </div>
            ) : (
              <Carousel
                fade
                interval={4000}
                pause={false}
                className="custom-carousel"
              >
                {images.map((image) => (
                  <Carousel.Item key={image.id}>
                    <img
                      className="carousel-image d-block w-100"
                      src={image.url}
                      alt="Cat Slide"
                      style={{ maxHeight: "1000px", objectFit: "cover" }}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ImageCarousel;
