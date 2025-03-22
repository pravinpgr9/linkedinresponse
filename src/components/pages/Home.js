import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "../Style.css"; // Import custom CSS file for additional styling
import { useNavigate } from "react-router-dom";
import HomePageSection from "./HomePageSection";

import HomePageImage from '../../assets/HomePageImage.jpg';

const Home = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/subscription");
  };

  return (
    <>
      <Container fluid>
        {/* Hero Section */}
        <Row className="hero-section align-items-center bg-light">
          <Col md={6} className="text-center text-md-start p-5">
            <h1 className="display-4 fw-bold">Welcome to Dr. Priya's Blog</h1>
            <p className="lead mt-3">
              Your Ultimate Destination for Inspiring, Informative, and Engaging
              Content
            </p>
            <Button variant="primary" size="lg" className="mt-3">
              Start Reading Now
            </Button>
          </Col>
          <Col md={6} className="p-0">
        <img
          src={HomePageImage}
          alt="Dr. Priya's Blog Hero"
          className="img-fluid rounded-circle"
          style={{ width: '75%', height: '75%', objectFit: 'cover' }}
        />
      </Col>
        </Row>

        <HomePageSection />

        {/* Featured Blogs Section */}
        <Container className="my-5">
          <Row>
            <Col className="text-center">
              <h2 className="display-5 fw-bold">Featured Blogs</h2>
              <p className="lead text-muted">
                Explore our handpicked selection of top articles that will
                inspire, educate, and entertain you.
              </p>
            </Col>
          </Row>
          <Row className="g-4 mt-4">
            <Col md={4}>
              <Card className="h-100 shadow-sm hover-effect">
                <Card.Img
                  variant="top"
                  src="https://diplo-media.s3.eu-central-1.amazonaws.com/2024/06/ai-powered-hospital-1024x585.jpg"
                  alt="Blog 1"
                />
                <Card.Body>
                  <Card.Title>10 Tips for Writing Better Blog Posts</Card.Title>
                  <Card.Text>
                    Learn how to craft compelling blog posts that captivate your
                    audience and drive engagement.
                  </Card.Text>
                  <Button variant="outline-primary">Read More</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 shadow-sm hover-effect">
                <Card.Img
                  variant="top"
                  src="https://diplo-media.s3.eu-central-1.amazonaws.com/2024/06/ai-powered-hospital-1024x585.jpg"
                  alt="Blog 2"
                />
                <Card.Body>
                  <Card.Title>
                    The Ultimate Guide to SEO for Bloggers
                  </Card.Title>
                  <Card.Text>
                    Discover the secrets to optimizing your blog for search
                    engines and increasing your organic traffic.
                  </Card.Text>
                  <Button variant="outline-primary">Read More</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 shadow-sm hover-effect">
                <Card.Img
                  variant="top"
                  src="https://diplo-media.s3.eu-central-1.amazonaws.com/2024/06/ai-powered-hospital-1024x585.jpg"
                  alt="Blog 3"
                />
                <Card.Body>
                  <Card.Title>How to Monetize Your Blog in 2023</Card.Title>
                  <Card.Text>
                    Find out the best strategies to turn your blog into a
                    profitable venture this year.
                  </Card.Text>
                  <Button variant="outline-primary">Read More</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

        {/* About Section */}
        <Row className="about-section bg-light py-5">
          <Col md={6} className="p-5">
            <img
              src="https://m.media-amazon.com/images/I/61JGycuXfSL._AC_UF1000,1000_QL80_.jpg"
              alt="About Us"
              className="img-fluid rounded"
            />
          </Col>
          <Col md={6} className="p-5 d-flex align-items-center">
            <div>
              <h2 className="display-5 fw-bold">About Dr. Priya's Blog</h2>
              <p className="lead text-muted mt-3">
                We are passionate about sharing knowledge, insights, and stories
                that matter. Our mission is to provide you with high-quality
                content that inspires, educates, and entertains.
              </p>
              <Button variant="primary" size="lg" className="mt-3">
                Learn More About Us
              </Button>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Call to Action Section - Full Width */}
      <Container fluid className="p-0 mx-0">
        <Row className="cta-section bg-primary text-white py-5 no-gutters">
          <Col className="text-center">
            <h2 className="display-5 fw-bold">Join Our Community of Readers</h2>
            <p className="lead mt-3">
              Stay updated with the latest blog posts, exclusive content, and
              special offers by subscribing to our newsletter.
            </p>
            <Button
              variant="light"
              size="lg"
              className="mt-3 cta-button"
              onClick={handleNavigation}
            >
              Subscribe Now
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
