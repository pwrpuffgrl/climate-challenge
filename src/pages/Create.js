import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Grid from '../components/Grid';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 600px;
  position: relative;
  overflow-y: auto;
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

const Label = styled.label`
  font-size: 16px;
  color: white;
  font-family: helvetica;
`;

const Checkbox = styled.input`
  height: 20px;
  width: 20px;
`;

const BigHeader = styled(Header)`
  height: 200px;
`;

const Button = styled.button`
  margin-top: 20px;
  background: #d3e7ee;
  font-size: 16px;
  border-radius: 8px;
`;

function CreateChallenge({ history, onCreate }) {
  const [formValues, setFormValues] = React.useState({
    title: '',
    rules: '',
    duration: '',
    category: '',
    joined: '',
    startDate: '',
    endDate: ''
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

    const challenge = {
      title: formValues.title,
      rules: formValues.rules,
      duration: formValues.duration,
      category: formValues.category,
      joined: formValues.joined
    };
    console.log(challenge);
    onCreate(challenge);
    history.replace('/challenges');
    console.log(formValues.joined);
  }

  return (
    <Grid>
      <BigHeader title="CREATE" />
      <Container>
        <Form onSubmit={handleSubmit}>
          <Input
            name="title"
            value={formValues.title}
            placeholder="Please enter a title"
            onChange={handleChange}
          />
          <Textarea
            name="rules"
            value={formValues.rules}
            placeholder="Tell us about your challenge"
            onChange={handleChange}
          />
          <Input
            name="duration"
            type="number"
            value={formValues.duration}
            placeholder="Enter the duration in days"
            onChange={handleChange}
          />
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
          <Label>
            <Checkbox
              name="joined"
              type="checkbox"
              value={formValues.joined}
              onChange={handleChange}
            />
            Join Challenge
          </Label>
          <Button>Create Challenge</Button>
        </Form>
      </Container>
    </Grid>
  );
}

export default CreateChallenge;
