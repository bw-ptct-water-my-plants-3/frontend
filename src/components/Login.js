import React from "react";
import { Link} from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super();
    console.log(props);
    this.state = {
      username: "",
      password: "",
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
      <>
       <Link to="/">Home</Link>
        <form>
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
      </>
    );
  }
}

export default Login;
