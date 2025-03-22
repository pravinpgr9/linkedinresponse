import React, { useEffect, useState } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://node-rest-api-one.vercel.app/api/posts/")
      .then((response) => {
        if (!response.ok) throw new Error(`Error: ${response.statusText}`);
        return response.json();
      })
      .then((data) => setBlogs(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-center">Loading blogs...</p>;
  if (error) return <p className="text-danger text-center">{error}</p>;

  return (
    <Container>
      <h2 className="mb-4">Blogs</h2>
      <Row>
        {blogs.map((blog) => (
          <Col md={4} key={blog._id} className="mb-4">
            <Card>
              <Card.Img variant="top" src={blog.img || "https://via.placeholder.com/300"} />
              <Card.Body>
                
                <Card.Title>
  <div dangerouslySetInnerHTML={{ __html: blog.desc.substring(0, 50) + "..." }} />
</Card.Title>
                <Link to={`/blogs/${blog._id}`} className="btn btn-primary">
                  Read More
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Blogs;
