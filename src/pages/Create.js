import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { createFade } from '../utils/animations';
import Grid from '../components/Grid';

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 600px;
`;

const Form = styled.form`
  padding: 20px;
  animation: ${createFade} 1s ease both;
  background: transparent;
`;

const FormRow = styled.div`
  margin-bottom: 15px;
  background: transparent; s
`;

const Input = styled.input`
  font-size: 16px;
  width: 100%;
  padding: 10px;
  font-family: helvetica;
  border: solid #46395c 0.5px;
  border-radius: 8px;
`;

const Textarea = styled.textarea`
  font-size: 16px;
  width: 100%;
  height: 80px;
  padding: 10px;
  font-family: helvetica;
  border-radius: 8px;
  border: solid #46395c 0.5px;
`;

const DropDown = styled.select`
  font-size: 16px;
  padding: 5px;
  border-radius: 8px;
  border: solid #46395c 0.5px;
  overflow-y: auto;
`;

const Label = styled.label`
  font-size: 20px;
  font-weight: bold;
  font-family: helvetica;
  color: #46395c;
`;

const Checkbox = styled.input`
  height: 25px;
  width: 25px;
  border-radius: 8px;
  margin-left: 10px;
`;

const Button = styled.button`
  background: #c39791;
  color: white;
  border: none;
  font-size: 20px;
  border-radius: 8px;
  font-family: 'Raleway';
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  color: white;
`;

function CreateChallenge({ history, onCreate }) {
  const [formValues, setFormValues] = React.useState({
    title: '',
    rules: '',
    tips: '',
    duration: '',
    category: '',
    joined: false,
    startDate: '',
    endDate: '',
    lastParticipated: '',
    completed: false,
    karma: 0,
    percent: 0
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  }

  function handleCheckboxChange(event) {
    const { name } = event.target;
    setFormValues({
      ...formValues,
      [name]: !formValues.joined
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const challenge = {
      title: formValues.title,
      rules: formValues.rules,
      tips: formValues.tips,
      duration: formValues.duration,
      category: formValues.category,
      joined: formValues.joined,
      lastParticipated: '',
      karma: 0,
      streak: 0
    };
    onCreate(challenge);
    history.replace('/challenges');
  }

  const days = new Array(31).fill('');

  return (
    <Grid>
      <Header title="CREATE" />
      <Container>
        <Form onSubmit={handleSubmit}>
          <FormRow>
            <Label htmlFor="title">Title</Label>
            <Input
              maxLength="18"
              name="title"
              value={formValues.title}
              placeholder="Please enter a title"
              onChange={handleChange}
            />
          </FormRow>
          <FormRow>
            <Label htmlFor="rules">Rules</Label>
            <Textarea
              name="rules"
              value={formValues.rules}
              placeholder="What are the rules for this challenge?"
              onChange={handleChange}
            />
          </FormRow>
          <FormRow>
            <Label htmlFor="tips">Tips</Label>
            <Textarea
              name="tips"
              value={formValues.tips}
              placeholder="Share helpful strategies and tips for completing this challenge!"
              onChange={handleChange}
            />
          </FormRow>
          <FormRow>
            <FormRow />
            <DropDown
              name="duration"
              type="number"
              value={formValues.duration}
              onChange={handleChange}
            >
              <option value="null">Select duration</option>
              {days.map((day, index) => (
                <option value={index + 1}>{index + 1}</option>
              ))}
            </DropDown>
          </FormRow>
          <FormRow>
            <DropDown
              name="category"
              value={formValues.category}
              onChange={handleChange}
            >
              <option>Select a category </option>
              <option value="plastic">Plastic</option>
              <option value="transportation">Transportation</option>
              <option value="agriculture">Agriculture</option>
              <option value="activism">Activism</option>
            </DropDown>
          </FormRow>
          <FormRow>
            <CheckboxContainer>
              <Label htmlFor="joined">Join challenge now</Label>
              <Checkbox
                name="joined"
                id="joined"
                type="checkbox"
                value={formValues.joined}
                onChange={handleCheckboxChange}
              />
            </CheckboxContainer>
          </FormRow>
          <Button disabled={!formValues}>Create Challenge</Button>
        </Form>
      </Container>
      <Footer />
    </Grid>
  );
}

export default CreateChallenge;
