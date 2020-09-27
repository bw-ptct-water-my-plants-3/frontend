import React from 'react';
import { Button } from 'reactstrap';

const RegisterUser = () => {
  const [register, setRegister] = useState({
    username: '',
    password: '',
    phoneNumber: '',
  });

  const handleChange = (e) => {
    e.preventDefault();
    console.log();
    setRegister({ ...register, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    console.log(register);
    e.preventDefault();
    alert('Thank you for registering!');
  };

  return (
    <div>
      <h1>Register for an account!</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          name="username"
          onchange={handleChange}
        />
        <input
          type="text"
          value={register.password}
          placeholder="password"
          name="password"
          onChange={handleChange}
        />
        <input
          type="text"
          value={register.text}
          placeholder="phone number"
          name="phoneNumber"
          onChange={handleChange}
        />
        <Button color="success">REGISTER</Button>
      </form>
    </div>
  );
};

export default RegisterUser;
