import React, { useState } from 'react';
import styled from 'styled-components';
import { fadeIn, fadeOut } from '../utils/animations';
import MainLogo from '../components/MainLogo';
import propTypes from 'prop-types';

const Input = styled.input`
  font-size: 16px;
  width: 100%;
  padding: 10px;
  font-family: helvetica;
  border: solid #46395c 0.5px;
  border-radius: 8px;
`;
const Label = styled.label`
  font-size: 20px;
  font-weight: bold;
  padding-top: 10px;
  color: white;
`;

const Button = styled.button`
  background: #c2a0b4;
  margin-top: 20px;
  color: white;
  border: none;
  font-size: 20px;
  border-radius: 8px;
  font-family: 'Raleway';
`;
const FormRow = styled.div`
  margin-bottom: 15px;
  background: transparent; s
`;

const Form = styled.form`
  padding: 20px;
`;
const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'helvetica';
  margin: 0;
  color: #46395c;
  background: linear-gradient(
    0deg,
    rgba(124, 87, 109, 1) 20%,
    rgba(48, 34, 75, 1) 100%
  );
`;

function Login({ history, activeUser, onLogin, ...props }) {
  const [formValues, setFormValues] = useState({
    user_name: '',
    password: ''
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    try {
      if (
        activeUser.user_name === formValues.user_name &&
        activeUser.password === formValues.password
      ) {
        history.push('/profile');
      } else {
        alert('wrong password');
      }
    } catch (e) {
      console.log(e);
    }
    onLogin(formValues);
  }

  return (
    <Container>
      <div>
        <MainLogo animation={fadeIn} />
        <MainLogo animation={fadeOut} />
      </div>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="user_name">Name</Label>
        <Input
          onChange={handleChange}
          name="user_name"
          value={formValues.user_name}
        />
        <FormRow />
        <Label htmlFor="password">Password</Label>{' '}
        <Input
          onChange={handleChange}
          name="password"
          type="password"
          value={formValues.password}
        />
        <Button>Log in</Button>
      </Form>
    </Container>
  );
}

Login.propTypes = {
  activeUser: propTypes.object,
  onLogin: propTypes.func
};
export default Login;
