import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>ACUBE</h1>
      <div className="links">
        <p>Software Company</p>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/create">Add Review</Link>
      </div>
    </nav>
  );
}

export default Navbar;








// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <h1>The Dojo Blog</h1>
//       <div className="links">
//         <Link to="/">Home</Link>
//         <Link to="/create">New Blog</Link>
//       </div>
//     </nav>
//   );
// }
 
// export default Navbar;
