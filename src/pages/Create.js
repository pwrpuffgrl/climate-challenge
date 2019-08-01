import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-width: 600px;
  position: relative;
  padding-top: 50px;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
`;

const Form = styled.form`
  margin-top: 60px;
  margin-left: 30px;
`;

const Input = styled.input`
  border: none;
  font-size: 16px;
  border-radius: 8px;
  background: white;
  min-width: 320px;
  margin-top: 15px;
  padding: 5px;
`;

const Textarea = styled.textarea`
  border: none;
  border-radius: 8px;
  background: white;
  font-size: 16px;
  margin-top: 15px;
  min-width: 320px;
  padding: 5px;
`;

const DropDown = styled.select`
  background: white;
  margin-top: 15px;
  font-size: 16px;
  padding: 5px;
`;

const BigHeader = styled(Header)`
  height: 200px;
`;

function Create() {
  return (
    <Container>
      <BigHeader title="CREATE A CHALLENGE" />
      <Form>
        <Input name="title" placeholder="Please enter a title" />
        <Textarea name="rules" placeholder="Tell us about your challenge" />
        <Input name="duration" placeholder="Enter the duration in days" />
        <DropDown>
          <option>Select a category </option>
          <option>Plastic</option>
          <option>Transportation</option>
          <option>Agriculture</option>
          <option>Activism</option>
        </DropDown>
      </Form>
    </Container>
  );
}

export default Create;
