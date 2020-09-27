import React from 'react';
import { Link } from 'react-router-dom';

import { Button, Card, Form, FormGroup, Label, Input } from 'reactstrap';

class Login extends React.Component {
  constructor(props) {
    super();
    console.log(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  handleChanges = (e) => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };

  render() {
    return (
      <section className="flex-center">
        <Card className="padding">
          <Form>
            <FormGroup>
              <Label for="username" hidden>
                Username
              </Label>
              <Input
                type="username"
                name="username"
                id="username"
                placeholder="Username"
                value={this.state.username}
                onChange={this.handleChanges}
              />
            </FormGroup>
            <FormGroup>
              <Label for="password" hidden>
                Password
              </Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleChanges}
              />
            </FormGroup>
            <div className="flex-center-x">
              <Button className="gap-x">Login</Button>
              <Link className="gap-x" to="/register">
                <Button>Register</Button>
              </Link>
            </div>
          </Form>
        </Card>
      </section>
    );
  }
}

export default Login;
