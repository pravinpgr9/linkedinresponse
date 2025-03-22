import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "./Style.css"; // Import custom CSS file for additional styling

export default function Footer() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchQuote = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("https://dummyjson.com/quotes/random");

      if (!response.ok) {
        throw new Error(`API responded with status: ${response.status}`);
      }

      const data = await response.json();

      if (!data || !data.quote || !data.author) {
        throw new Error("Invalid response format from API.");
      }

      setQuote(data.quote);
      setAuthor(data.author);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <footer className="bg-dark text-light py-4">
      <Container className="text-center">
        {loading ? (
          <p className="text-warning">Loading quote...</p>
        ) : error ? (
          <p className="text-danger">
            Error: {error} <br />
            <button className="btn btn-light btn-sm mt-2" onClick={fetchQuote}>
              Retry
            </button>
          </p>
        ) : (
          <p className="m-0">
            <span className="footer-text">"{quote}"</span>
            <br />
            <em>- {author}</em>
          </p>
        )}
      </Container>
    </footer>
  );
}
