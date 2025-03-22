import React, { useState } from "react";
import Axios from "axios";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import leftImage from "../assets/leftImage.jpg"; // Keep only the used image
import "./Style.css"; // Import custom CSS file for additional styling

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    desc: "",
    city: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [apiResponse, setApiResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  // ✅ Using handleChange to update state
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await Axios.post(
        `${process.env.BACKEND_URL}/linkedin`, 
        formData
      );

      setApiResponse(response.data);
      setFormSubmitted(true);

      setFormData({
        name: "",
        email: "",
        desc: "",
        city: "",
      });
    } catch (error) {
      console.error("API request error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col md={6} className="d-none d-md-block">
          <div className="image-container">
            <img src={leftImage} alt="Left" className="img-fluid" height="500px" />
          </div>
        </Col>
        <Col md={6}>
          <div className="form-container">
            <h5 className="text-center">Sync With Us</h5>
            <Form onSubmit={handleSubmit} className="custom-form">
              <Form.Group controlId="name">
                <Form.Label>Your Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange} // ✅ Now using handleChange
                  required
                />
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Your Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange} // ✅ Now using handleChange
                  required
                  pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                />
              </Form.Group>
              <Form.Group controlId="desc">
                <Form.Label>Your Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="desc"
                  value={formData.desc}
                  onChange={handleChange} // ✅ Now using handleChange
                  required
                />
              </Form.Group>
              <Form.Group controlId="city">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange} // ✅ Now using handleChange
                  required
                />
              </Form.Group>
              <Button type="submit" variant="primary" className="submit-btn" disabled={loading}>
                {loading ? "Sending..." : "Send Details"}
              </Button>
              {formSubmitted && apiResponse && (
                <p className={`text-success mt-3 fade-out ${apiResponse.success ? "green-message" : "red-message"}`}>
                  {apiResponse.success ? "Form submitted successfully! Thank you." : "Form submission failed."}
                </p>
              )}
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;
