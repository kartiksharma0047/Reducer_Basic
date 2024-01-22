import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './CSS/BlogDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

function BlogDetails() {
  const userid = useParams();
  const navigate = useNavigate();
  const id = userid.id;
  const [ID, SetID] = useState(id);
  const [user, setUser] = useState(null);

  const handleNextUser = () => {
    const nextUserId = parseInt(ID) + 1;
    SetID(nextUserId);
    navigate(`/blog/${nextUserId}`);
  };

  const handlePreviousUser = () => {
    const previousUserId = parseInt(ID) - 1;
    SetID(previousUserId);
    navigate(`/blog/${previousUserId}`);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.keyCode === 39) {
        handleNextUser();
      } else if (e.keyCode === 37) {
        handlePreviousUser();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [ID,handleNextUser, handlePreviousUser]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${ID}`)
      .then((resolve) => resolve.json())
      .then((data) => setUser(data));
  }, [ID]);

  if (!user) {
    return <div className='LoadBlog'>Loading...</div>;
  }

  return (
    <>
      <div className='user'>
        <FontAwesomeIcon className='userbtn Leftbtn' icon={faChevronLeft} onClick={handlePreviousUser} />
        <div className='userDetail'>
          <FontAwesomeIcon className='fontBlog' icon={faUser} />
          <h1>User {user.id}</h1>
          <h2>{user.title}</h2>
          <p>{user.body}</p>
        </div>
        <FontAwesomeIcon className='userbtn Rightbtn' icon={faChevronRight} onClick={handleNextUser} />
      </div>
    </>
  );
}

export default BlogDetails;
