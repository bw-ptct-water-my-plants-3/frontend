import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { login } from './Actions/actions';
import { useHistory } from 'react-router-dom';

const Login = (props) => {
  const history = useHistory();

  const [state, setState] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const loginfunc = (e) => {
    e.preventDefault();
    props.login(state).then(() => {
      history.push('/plants');
    });
  };

  return (
    <section className="flex-center">
      <Card className="padding">
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="username" hidden>
              Username
            </Label>
            <Input
              type="username"
              name="username"
              id="username"
              placeholder="Username"
              value={state.username}
              onChange={handleChange}
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
              value={state.password}
              onChange={handleChange}
            />
          </FormGroup>
          <div className="flex-center-x">
            <Button
              onClick={loginfunc}
              color="success"
              type="submit"
              className="gap-x"
            >
              Login
            </Button>
            <Link className="gap-x" to="/register">
              <Button type="button">Register</Button>
            </Link>
          </div>
        </Form>
      </Card>
    </section>
  );
};

export default connect(null, { login })(Login);
