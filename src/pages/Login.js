import React, { useState } from 'react';
import styled from 'styled-components';
import { getFromLocal, setToLocal } from '../services';
import userData from './__mock__/user.json';

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
  color: #936979;
  text-shadow: 1px 1px rgba(256, 256, 256, 0.6);
  font-family: helvetica;
`;

const FormRow = styled.div`
  margin-bottom: 15px;
  background: transparent; s
`;

const Form = styled.form`
  padding: 20px;
  background: transparent;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'helvetica';
  margin: 0;
  color: #46395c;
`;

function Login({ history }) {
  const [formValues, setFormValues] = useState({
    user_name: '',
    password: ''
  });
  const [user, setUser] = useState(getFromLocal('user') || user);
  React.useEffect(() => setToLocal('user', user), [user]);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
    console.log(formValues.user_name);
  }
  function handleSubmit(event) {
    event.preventDefault();
    try {
      if (
        user.user_name === formValues.user_name &&
        user.password === formValues.password
      ) {
        history.replace('/profile');
      } else {
        alert('wrong password');
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <Container>
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
          value={formValues.password}
        />
        <button>Log in</button>
      </Form>
    </Container>
  );
}

export default Login;
