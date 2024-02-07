import React, { useState } from "react";
import Axios from "axios";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import leftImage from "../assets/leftImage.jpg"; // Import left image
import rightImage from "../assets/rightImage.jpg"; // Import right image

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    desc: "",
    city: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [apiResponse, setApiResponse] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;

    console.log(name);
    console.log(value);

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await Axios.post(
        "https://node-rest-api-one.vercel.app/api/linkedin",
        formData
      );
      setApiResponse(response.data);
      setFormSubmitted(true);
    } catch (error) {
      console.error("API request error:", error);
      // Handle API errors gracefully (e.g., display an error message to the user)
    }
  };

  return (
    <div style={{ backgroundColor: "#fff176", minHeight: "100vh" }}>
      <Container className="mt-5">
        <Row>
          <Col md={3} className="d-none d-md-block">
            <img
              src={leftImage}
              alt="Left"
              style={{ width: "100%", height: "auto" }}
            />
          </Col>
          <Col md={6}>
            <h1 className="text-center">Contact Us</h1>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group controlId="desc">
                <Form.Label>Description</Form.Label>
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
              <Button type="submit" variant="primary">
                Submit
              </Button>
              {formSubmitted && apiResponse && (
                <p className="text-success mt-3">
                  Form submitted successfully! Response:{" "}
                  {JSON.stringify(apiResponse)}
                </p>
              )}
            </Form>
          </Col>
          <Col md={3} className="d-none d-md-block">
            <img
              src={rightImage}
              alt="Right"
              style={{ width: "100%", height: "auto" }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactForm;
