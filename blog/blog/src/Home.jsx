import React from 'react';
import BlogList from './BlogList'; // Ensure BlogList.jsx is present

const Home = () => {
  return (
    <div className="home">
      <BlogList />
    </div>
  );
}

export default Home;



// import BlogList from "./BlogList";
// import useFetch from "./useFetch";

// const Home = () => {
//   const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')

//   return (
//     <div className="home">
//       { error && <div>{ error }</div> }
//       { isPending && <div>Loading...</div> }
//       { blogs && <BlogList blogs={blogs} /> }
//     </div>
//   );
// }
 
// export default Home;





    // const[name,setName]=useState('mario');
    // const[age, setAge]=useState(25);

    // // const handleClick =(e)=>{
    //     // console.log('hello, ninjas',e);}

    // const handleClick =()=>{
    // setName('luigi');
    // setAge(30);
    // }

    // const handleClickAgain =(name,e)=>{
        // console.log('hello'+name);
    // }

    // lists:
    // const [blogs,setBlogs]=useState(
        // [
        //     { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        //     { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        //     { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
        //   ]);

    // const handleDelete=(id)=> {
    //     const newBlogs =blogs.filter(blogs=> blogs.id!==id);
    //     setBlogs(newBlogs); }
