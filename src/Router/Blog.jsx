import React, { useEffect, useState } from 'react';
import "./CSS/Blog.css";
import { Link } from "react-router-dom"
import blackimg from "./Images/download.png";
import blueimg from "./Images/person-icon-blue-18.png";

function Blog() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((resolve) => resolve.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <div className='BlogPage'>
        <div className='BlogInfo'>
          <h1>Financity</h1>
          <p>We help you managing asset, provide financial advise. Leave money issue with us and focus on your core business.</p>
          <div className='Blogbtn'>
            <Link to="/about" className='aboutbtn'>About Us</Link>
            <Link to="/contact" className='contactbtn'>Contact Us</Link>
          </div>
        </div>
        <div className='line'></div>
        <div className='BlogList'>
          {data.map((user) => (
            <Link key={user.id} to={`/blog/${user.id}`}>
              <img
                src={user.id % 2 === 0 ? blackimg : blueimg}
                alt={`User ${user.id}`}
              />
              <h1>User {user.id}</h1>
              <p>{user.title}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Blog;