// BlogList.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from './useFetch';

const BlogList = () => {
  const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

  return (
    <div className="blogs">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blogs && blogs.length > 0 ? (
        blogs.map(blog => (
          <Link to={`/blogs/${blog.id}`} key={blog.id} className="blog-preview">
            <h2>{blog.title}</h2>
            <p>{blog.body.slice(0, 100)}...</p>
          </Link>
        ))
      ) : (
        <div>No blogs to display</div>
      )}
    </div>
  );
}

export default BlogList;








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
