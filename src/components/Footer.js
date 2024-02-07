import React from "react";
import { Container } from "react-bootstrap";
import "./Style.css"; // Import custom CSS file for additional styling

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <p className="m-0 text-center">
          <span className="footer-text"></span>
          {new Date().getFullYear()} | "The only limit to our realization of
          tomorrow will be our doubts of today." - Franklin D. Roosevelt
        </p>
      </Container>
    </footer>
  );
}
