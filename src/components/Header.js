import React from "react";
import { Container } from "react-bootstrap";
import "./Style.css"; // Import custom CSS file for additional styling

const Header = () => {
  return (
    <Container className="header-container mt-5">
      <center>
        <h2 className="header-title">Thank You for Reading!</h2>
      </center>
      <hr className="header-divider" />
      <p className="header-text">
        We're thrilled to see your interest in our content and we're grateful
        for your time spent reading our article on LinkedIn. Your engagement
        means the world to us!
      </p>
      <hr className="header-divider" />
      <p className="header-text">
        As a token of our appreciation, we'd like to offer you the opportunity
        to receive even more valuable insights, tips, and updates directly from
        us. By filling out the form below, you'll gain access to exclusive
        content and the latest news in your inbox.
      </p>
    </Container>
  );
};

export default Header;
