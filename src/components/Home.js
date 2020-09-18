import React from "react";
import { Link} from "react-router-dom";
const Home = () => {
  return (
    <>
      <p>Welcome</p>
      <Link to="/login">Login</Link>

      
    </>
  );
};

export default Home;
