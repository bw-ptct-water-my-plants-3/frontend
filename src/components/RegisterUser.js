import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Form, FormGroup, Label, Input } from 'reactstrap';
import {register} from "./Actions/actions"
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';



const RegisterUser = (props) => {
  const [state, setState] = useState({
    username: '',
    password: '',
    phoneNumber: '',
  });

  const history = useHistory();
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

const registerfunc = (e) =>{
  e.preventDefault();
props.register(state)
history.push('/login');
}

  const handleSubmit = (e) => {
    e.preventDefault();
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
          <FormGroup>
            <Label for="phoneNumber" hidden>
              PhoneNumber
            </Label>
            <Input
              type="tel"
              name="phoneNumber"
              id="phoneNumber"
              placeholder="Phone Number"
              value={state.phoneNumber}
              onChange={handleChange}
            />
          </FormGroup>
          <div className="flex-center-x">
            <Button onClick={registerfunc}color="success" type="submit" className="gap-x">
              Register
            </Button>
            <Link className="gap-x" to="/login">
              <Button type="button">Login</Button>
            </Link>
          </div>
        </Form>
      </Card>
    </section>
  );
};


export default connect(
  null,
  { register }
)(RegisterUser);
