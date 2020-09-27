import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Form, FormGroup, Label, Input } from 'reactstrap';

const RegisterUser = () => {
  const [state, setState] = useState({
    username: '',
    password: '',
    phoneNumber: '',
  });

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

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
            <Button color="success" type="submit" className="gap-x">
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

export default RegisterUser;
