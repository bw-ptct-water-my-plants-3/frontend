import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import { Button } from 'reactstrap';

class Login extends React.Component {
  constructor(props) {
    super();
    console.log(props);
    this.state = {
      username: '',
      password: '',
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
        </form>
      </div>
    );
  }
}

export default Login;
