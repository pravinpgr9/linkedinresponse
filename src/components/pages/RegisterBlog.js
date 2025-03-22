import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import axios from "axios";
import { Editor } from "@tinymce/tinymce-react";

const RegisterBlog = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
  });

  const handleEditorChange = (content) => {
    setFormData({ ...formData, description: content });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const blogData = {
        userId: "12345", // Replace with actual user ID if available
        title: formData.title, // ✅ Include title in request
        desc: formData.description, // ✅ Use TinyMCE content
        img: formData.image,
        likes: [],
      };

      //await axios.post("https://node-rest-api-one.vercel.app/api/posts", blogData);
      await axios.post(`${process.env.BACKEND_URL}/posts`, blogData);
      
      alert("Blog Registered Successfully!");
      setFormData({ title: "", description: "", image: "" });
    } catch (error) {
      console.error("Error submitting blog:", error);
    }
  };

  return (
    <Container>
      <h2>Register a New Blog</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="description">
          <Form.Label>Blog Description</Form.Label>
          <Editor
            apiKey={process.env.REACT_APP_TINYMCE_API_KEY} // ✅ Your API key
            value={formData.description}
            onEditorChange={handleEditorChange}
            init={{
              height: 300,
              menubar: false,
              plugins: "link image code",
              toolbar: "undo redo | bold italic | alignleft aligncenter alignright | code",
            }}
          />
        </Form.Group>

        <Form.Group controlId="image">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
        </Form.Group>

        <Button type="submit" className="mt-3">Submit Blog</Button>
      </Form>
    </Container>
  );
};

export default RegisterBlog;
