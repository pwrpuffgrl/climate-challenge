import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Grid from '../components/Grid';
import Footer from '../components/Footer';
import { createFade } from '../utils/animations';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  max-width: 600px;
  animation: ${createFade} 1s ease both;
`;

const Form = styled.form`
  padding: 20px;
`;

const FormRow = styled.div`
  margin-bottom: 20px;
`;

const Input = styled.input`
  border: none;
  font-size: 16px;
  background: white;
  width: 100%;
`;

const Textarea = styled.textarea`
  border: none;
  background: white;
  font-size: 16px;
  width: 100%;
`;

const DropDown = styled.select`
  background: white;
  font-size: 16px;
  padding: 5px;
`;

const Label = styled.label`
  font-size: 20px;
  font-weight: bold;
  color: white;
  background: #242d42;
  font-family: helvetica;
  padding: 3px;
`;

const Checkbox = styled.input`
  height: 20px;
  width: 20px;
`;

const BigHeader = styled(Header)`
  height: 200px;
`;

const Button = styled.button`
  background: #d3e7ee;
  font-size: 20px;
  border-radius: 8px;
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
    lastParticipated: ''
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
      lastParticipated: ''
    };
    onCreate(challenge);
    history.replace('/challenges');
    console.log(formValues.joined);
  }

  return (
    <Grid>
      <BigHeader title="CREATE" />
      <Container>
        <Form onSubmit={handleSubmit}>
          <FormRow>
            <Label forHtml="title">Title</Label>
            <Input
              name="title"
              value={formValues.title}
              placeholder="Please enter a title"
              onChange={handleChange}
            />
          </FormRow>
          <FormRow>
            <Label forHtml="rules">Rules</Label>
            <Textarea
              name="rules"
              value={formValues.rules}
              placeholder="What are the rules for this challenge?"
              onChange={handleChange}
            />
          </FormRow>
          <FormRow>
            <Label for="tips">Tips</Label>
            <Textarea
              name="tips"
              value={formValues.tips}
              placeholder="Share helpful strategies and tips for completing this challenge!"
              onChange={handleChange}
            />
          </FormRow>
          <FormRow>
            <Label for="duration">Duration</Label>
            <Input
              name="duration"
              type="number"
              value={formValues.duration}
              placeholder="Enter the duration in days"
              onChange={handleChange}
            />
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
              <Label for="joined">Join challenge now</Label>
              <Checkbox
                name="joined"
                id="joined"
                type="checkbox"
                value={formValues.joined}
                onChange={handleCheckboxChange}
              />
            </CheckboxContainer>
          </FormRow>
          <Button disabled={!formValues.title || !formValues.rules}>
            Create Challenge
          </Button>
        </Form>
      </Container>
      <Footer />
    </Grid>
  );
}

export default CreateChallenge;
