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

  //*ignore using below as a template for now until i get api*
  //  SubmitButton = (e) => {
  //     e.preventDefault();
  //     console.log(this.state)
  //     axios
  //       .post(`http://localhost:5000/api/login`, this.state)
  //       .then((response) => {
  //         console.log(response)
  //         localStorage.setItem("token", response.data.payload);
  //         this.props.history.push("/protected");
  //         console.log(response);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };

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

          {/* ignore for now <button  onClick={this.SubmitButton}>Submit</button> */}
        </form>
      </>
    );
  }
}

export default Login;
