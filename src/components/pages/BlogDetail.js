import React, { useEffect, useState } from "react";
import { Container, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

const BlogDetail = () => {
  const { id } = useParams(); // Get the blog ID from the URL
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://node-rest-api-one.vercel.app/api/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBlog(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching blog details:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!blog) return <p>Blog not found.</p>;

  return (
    <Container className="mt-4">
      <Card>
        <Card.Img variant="top" src={blog.img || "https://via.placeholder.com/150"} />
        <Card.Body>
          <Card.Title>{blog.title}</Card.Title> {/* Display title */}
          <p><strong>Posted on:</strong> {new Date(blog.createdAt).toDateString()}</p>
          <Card.Text dangerouslySetInnerHTML={{ __html: blog.desc }} /> {/* Render HTML content */}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default BlogDetail;
