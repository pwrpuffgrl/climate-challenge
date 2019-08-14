import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { createFade } from '../utils/animations';

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
  color: white;
  font-family: helvetica;
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

const CreateContainer = styled.div`
  color: #46395c;
  background: linear-gradient(
    0deg,
    rgba(124, 87, 109, 1) 20%,
    rgba(48, 34, 75, 1) 100%
  );
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
    karma: 0
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

  return (
    <CreateContainer>
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
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
              <option value="27">27</option>
              <option value="28">28</option>
              <option value="29">29</option>
              <option value="30">30</option>
              <option value="31">31</option>
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
    </CreateContainer>
  );
}

export default CreateChallenge;
