import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Edit = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:8000/blogs/${id}`)
      .then(res => res.json())
      .then(data => {
        setTitle(data.title);
        setBody(data.body);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const blog = { title, body };

    fetch(`http://localhost:8000/blogs/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(blog),
    }).then(() => {
      navigate('/');
    });
  };

  return (
    <div className="edit">
      <h2>Edit Review</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog Body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <button>Update Review</button>
      </form>
    </div>
  );
}

export default Edit;

