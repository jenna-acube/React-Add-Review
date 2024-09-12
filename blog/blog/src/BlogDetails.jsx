import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:8000/blogs/${id}`)
      .then(res => res.json())
      .then(data => {
        setBlog(data);
        setLoading(false);
      });
  }, [id]);

  const handleDelete = () => {
    fetch(`http://localhost:8000/blogs/${id}`, {
      method: 'DELETE',
    }).then(() => {
      navigate('/');
    });
  };

  return (
    <div className="blog-details">
      {loading && <div>Loading...</div>}
      {blog && (
        <>
          <h2>{blog.title}</h2>
          <p>{blog.body}</p>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </div>
  );
}

export default BlogDetails;








// import { useNavigate, useParams } from "react-router-dom";
// import useFetch from "./useFetch";

// const BlogDetails = () => {
//   const { id } = useParams();
//   const trimmedId = id.trim(); // Trim any extra spaces
//   const { data: blog, error, isPending } = useFetch(`http://localhost:8000/blogs/${trimmedId}`);

//   const navigate =useNavigate();

//   const handleClick= ()=>{
    
//     fetch(`http://localhost:8000/blogs/` + blog.id, {
//       method:'DELETE'
//     }).then(()=>{
//       navigate('/');
//     })
//   }
//   return (
//     <div className="blog-details">
//       { isPending && <div>Loading...</div> }
//       { error && <div>{ error }</div> }
//       { blog && (
//         <article>
//           <h2>{ blog.title }</h2>
//           <p>Written by { blog.author }</p>
//           <div>{ blog.body }</div>
//           <button onClick={handleClick}>delete</button>
//         </article>
//       )}
//     </div>
//   );
// }

// export default BlogDetails;
