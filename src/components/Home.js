import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { Button } from 'reactstrap';
const Home = () => {
  return (
    <>
      <div class="backgroundtwo">
        <h2>
          <p>Welcome</p>
        </h2>
        <Link to="/login">
          <Button color="success">Login</Button>
        </Link>
      </div>
    </>
  );
};

export default Home;
