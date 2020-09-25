import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { Button } from "reactstrap";

import { register } from "./Actions/actions"

class Login extends React.Component {
  constructor(props) {
    super();
    console.log(props);
    this.state = {
      username: "",
      password: "",
      phoneNumber:"",
    };
  }

  handleNameChanges = (e) => {
    e.preventDefault();
    this.setState({ username: e.target.value });
  };

  handlePassChanges = (e) => {
    e.preventDefault();
    this.setState({ password: e.target.value });
  };

  handlePhoneChanges = (e) => {
    e.preventDefault();
    this.setState({ phoneNumber: e.target.value });
  };

  SubmitButton = (e) => {
    e.preventDefault();
    console.log(this.state)
    register(this.state)
  };

  render() {
    return (
      <div class="background">
        <div class="home">
          <Link to="/">
            <Button color="success">Home</Button>
          </Link>
        </div>
        <form class="form-background">
          <label>
            Name:
            <input
              name="name"
              value={this.state.username}
              onChange={this.handleNameChanges}
            />
          </label>

          <label>
            Password:
            <input
              password="password"
              value={this.state.password}
              onChange={this.handlePassChanges}
            />
          </label>
          <label>
              Phone number:
            <input name="phoneNumber" value={this.state.phoneNumber}
              onChange={this.handlePhoneChanges} />
          </label>

          <button  onClick={this.SubmitButton}>Submit</button>

        </form>
      </div>
    );
  }
}

export default Login;
