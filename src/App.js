import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Blogs from "./components/pages/Blogs";
import Subscription from "./components/pages/Subscription";
import Footer from "./components/Footer"; // Import Footer
import BlogDetail from "./components/pages/BlogDetail";
import RegisterBlog from "./components/pages/RegisterBlog"; // Import new page

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"; // Import custom CSS for additional styling

const App = () => {
  return (
    <Router>
      {/* Customized Navbar with professional styling */}
      <Navbar expand="lg" className="sticky-top custom-navbar">
        <Container>
          <Navbar.Brand as={Link} to="/" className="navbar-brand-custom">
            डॉ. प्रिया प्रभू (देशपांडे)
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/" className="nav-link-custom">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className="nav-link-custom">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/blogs" className="nav-link-custom">
                Blogs
              </Nav.Link>
              <Nav.Link as={Link} to="/subscription" className="nav-link-custom">
                Subscription
              </Nav.Link>
              <Nav.Link as={Link} to="/register-blog" className="nav-link-custom">
                Register Blog
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/blogs/:id" element={<BlogDetail />} />
        <Route path="/register-blog" element={<RegisterBlog />} /> {/* New Route */}
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;