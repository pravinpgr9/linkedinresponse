import React, { useState } from "react";
import Axios from "axios";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import leftImage from "../assets/leftImage.jpg"; // Import left image
import rightImage from "../assets/rightImage.jpg"; // Import right image
import "./Style.css"; // Import custom CSS file for additional styling

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    desc: "",
    city: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    desc: "",
    city: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [apiResponse, setApiResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      errors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email address is invalid";
      isValid = false;
    }

    if (!formData.desc.trim()) {
      errors.desc = "Message is required";
      isValid = false;
    }

    if (!formData.city.trim()) {
      errors.city = "City is required";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (validateForm()) {
      setLoading(true); // Set loading to true when form is submitted
      try {
        const response = await Axios.post(
          "https://node-rest-api-one.vercel.app/api/linkedin",
          formData
        );

        setApiResponse(response.data);
        setFormSubmitted(true);

        setFormData({
          // Reset formData to initial state
          name: "",
          email: "",
          desc: "",
          city: "",
        });
      } catch (error) {
        console.error("API request error:", error);
        // Handle API errors gracefully (e.g., display an error message to the user)
      } finally {
        setLoading(false); // Set loading to false after API call is complete
      }
    }
  };

  return (
    <div>
      <Container className="mt-5">
        <Row>
          <Col md={6} className="d-none d-md-block">
            <div className="image-container">
              <img src={leftImage} alt="Left" className="img-fluid" />
            </div>
            <br />
          </Col>
          <Col md={6}>
            <div className="form-container">
              <h5 className="text-center">Sync With Us</h5>
              <Form onSubmit={handleSubmit} className="custom-form">
                <Form.Group controlId="name">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {formErrors.name && (
                    <p className="text-danger">{formErrors.name}</p>
                  )}
                </Form.Group>
                <Form.Group controlId="email">
                  <Form.Label>Your Email</Form.Label>
                  <Form.Control
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {formErrors.email && (
                    <p className="text-danger">{formErrors.email}</p>
                  )}
                </Form.Group>
                <Form.Group controlId="desc">
                  <Form.Label>Your Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    value={formData.desc}
                    onChange={handleChange}
                  />
                  {formErrors.desc && (
                    <p className="text-danger">{formErrors.desc}</p>
                  )}
                </Form.Group>
                <Form.Group controlId="city">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    type="text"
                    value={formData.city}
                    onChange={handleChange}
                  />
                  {formErrors.city && (
                    <p className="text-danger">{formErrors.city}</p>
                  )}
                </Form.Group>

                <Button
                  type="submit"
                  variant="primary"
                  className="submit-btn"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Details"}
                </Button>
                {formSubmitted && apiResponse && (
                  <p
                    className={`text-success mt-3 fade-out ${
                      apiResponse.success ? "green-message" : "red-message"
                    }`}
                  >
                    {apiResponse.success
                      ? "Form submitted successfully! Thank you."
                      : "Form submission failed."}
                  </p>
                )}
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactForm;
