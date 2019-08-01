import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Grid from '../components/Grid';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-width: 600px;
  position: relative;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
`;

const Form = styled.form`
  padding: 20px;
`;

const Input = styled.input`
  border: none;
  font-size: 16px;
  border-radius: 8px;
  background: white;
  width: 100%;
  margin-top: 15px;
  padding: 5px;
`;

const Textarea = styled.textarea`
  border: none;
  border-radius: 8px;
  background: white;
  font-size: 16px;
  margin-top: 15px;
  width: 100%;
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
    <Grid>
      <BigHeader title="CREATE" />
      <Container>
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
    </Grid>
  );
}

export default Create;
