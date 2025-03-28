import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section id="hero" className="py-5">
      <Container fluid>
        <Row
          className="align-items-center justify-content-center"
          style={{ height: "100vh" }}
        >
          {/* Contenedor del Iframe */}
          <Col xs={12} md={8} lg={6} className="text-center">
            <div
              className="hero-iframe-container"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <iframe
                title="Cats pack (Old)"
                frameBorder="0"
                allowFullScreen
                mozallowfullscreen="true"
                webkitallowfullscreen="true"
                allow="autoplay; fullscreen; xr-spatial-tracking"
                xr-spatial-tracking="true"
                execution-while-out-of-viewport="true"
                execution-while-not-rendered="true"
                web-share="true"
                src="https://sketchfab.com/models/280120dd79e944dea933dc463e41ae77/embed"
                className="w-100 rounded"
                style={{ aspectRatio: "16 / 9" }}
              ></iframe>
            </div>
          </Col>

          {/* Contenido del Hero */}
          <Col xs={12} md={8} lg={6} className="hero-content text-center mt-4">
            <h1 className="hero-title">DonGato App</h1>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
