// components/ContactForm.js
import React, { useState, useEffect } from "react";
import { Form, Row, Col, Button, Container } from "react-bootstrap";
import PropTypes from "prop-types";
import AOS from "aos";
import "aos/dist/aos.css";

const translations = {
  es: {
    contactTitle: "Contáctanos",
    nameLabel: "Nombre",
    lastNameLabel: "Apellido",
    emailLabel: "Correo electrónico",
    phoneLabel: "Teléfono",
    messageLabel: "Mensaje",
    submitButton: "Enviar",
  },
  en: {
    contactTitle: "Contact Us",
    nameLabel: "Name",
    lastNameLabel: "Last Name",
    emailLabel: "Email address",
    phoneLabel: "Phone number",
    messageLabel: "Message",
    submitButton: "Submit",
  },
};

function ContactForm({ language, toggleLanguage }) {
  const t = translations[language] || translations["es"];

  // Estado para manejar los campos del formulario
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  // Manejador de cambios en los campos
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Manejador de envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Form submitted successfully!");
    // Aquí puedes agregar lógica para enviar los datos a un servidor
  };

  // Inicialización de AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section id="contact">
      <Container className="d-flex flex-column align-items-center justify-content-center min-vh-100 g-3">
        {/* Título con animación */}
        <h2 data-aos="fade-down" data-aos-duration="1000">
          {t.contactTitle}
        </h2>

        <Row className="justify-content-center">
          <Col xs={12}>
            <Form onSubmit={handleSubmit}>
              {/* Grupo de campos para Nombre y Apellido */}
              <Form.Group controlId="formName">
                <Row className="g-3">
                  <Col xs={12} md={6}>
                    <Form.Label data-aos="fade-right" data-aos-duration="1000">
                      {t.nameLabel}
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder={`Enter your ${t.nameLabel.toLowerCase()}`}
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      data-aos="fade-right"
                      data-aos-duration="1000"
                    />
                  </Col>
                  <Col xs={12} md={6}>
                    <Form.Label data-aos="fade-left" data-aos-duration="1000">
                      {t.lastNameLabel}
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder={`Enter your ${t.lastNameLabel.toLowerCase()}`}
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      data-aos="fade-left"
                      data-aos-duration="1000"
                    />
                  </Col>
                </Row>
              </Form.Group>

              {/* Grupo de campos para Correo Electrónico y Teléfono */}
              <Form.Group controlId="formEmail">
                <Row className="g-3">
                  <Col xs={12} md={6}>
                    <Form.Label data-aos="fade-right" data-aos-duration="1000">
                      {t.emailLabel}
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder={`Enter your ${t.emailLabel.toLowerCase()}`}
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      data-aos="fade-right"
                      data-aos-duration="1000"
                    />
                  </Col>
                  <Col xs={12} md={6}>
                    <Form.Label data-aos="fade-left" data-aos-duration="1000">
                      {t.phoneLabel}
                    </Form.Label>
                    <Form.Control
                      type="tel"
                      placeholder={`Enter your ${t.phoneLabel.toLowerCase()}`}
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      data-aos="fade-left"
                      data-aos-duration="1000"
                    />
                  </Col>
                </Row>
              </Form.Group>

              {/* Campo para el Mensaje */}
              <Form.Group controlId="formMessage">
                <Form.Label data-aos="fade-up" data-aos-duration="1000">
                  {t.messageLabel}
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder={`Enter your ${t.messageLabel.toLowerCase()}`}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  data-aos="fade-up"
                  data-aos-duration="1000"
                />
              </Form.Group>

              {/* Botón de envío */}
              <Button
                className="mt-3"
                variant="primary"
                type="submit"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                {t.submitButton}
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

ContactForm.propTypes = {
  language: PropTypes.string.isRequired,
  toggleLanguage: PropTypes.func.isRequired,
};

export default ContactForm;
