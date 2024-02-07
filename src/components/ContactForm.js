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
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [apiResponse, setApiResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    console.log(name);
    console.log(value);

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true); // Set loading to true when form is submitted
    try {
      const response = await Axios.post(
        "https://node-rest-api-one.vercel.app/api/linkedin",
        formData
      );

      console.log(response.data);

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
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </Form.Group>
                <Form.Group controlId="email">
                  <Form.Label>Your Email</Form.Label>
                  <Form.Control
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </Form.Group>
                <Form.Group controlId="desc">
                  <Form.Label>Your Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    value={formData.desc}
                    onChange={(e) =>
                      setFormData({ ...formData, desc: e.target.value })
                    }
                  />
                </Form.Group>
                <Form.Group controlId="city">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    type="text"
                    value={formData.city}
                    onChange={(e) =>
                      setFormData({ ...formData, city: e.target.value })
                    }
                  />
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
