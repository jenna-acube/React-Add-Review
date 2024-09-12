// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import Edit from './Edit';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/create" element={<Create />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;












// import Navbar from './Navbar';
// import Home from './Home';
// import Create from './Create';
// import BlogDetails from './BlogDetails';
// import NotFound from './NotFound';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Navbar />
//         <div className="content">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/create" element={<Create />} />
//             <Route path="/blogs/:id" element={<BlogDetails />} />
//             {/* The wildcard route should be the last one */}
//             <Route path="*" element={<NotFound />} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;
