import React from 'react';
import styled from 'styled-components';
import Headline from '../components/Headline';
import Dialog from '../components/Dialog';
import ButtonLink from '../components/ButtonLink';

const CheckboxContainer = styled.form`
  display: flex;
  margin-top: 20px;
  align-items: center;
  color: white;
`;
const Checkbox = styled.input`
  height: 16px;
  width: 16px;
`;
const Label = styled.label`
  font-size: 16px;
  font-weight: bold;
  color: #242d42;
  font-family: helvetica;
  padding: 10px;
`;
const Content = styled.p`
  font-family: helvetica;
  font-size: 16px;
  padding-bottom: 10px;
  margin: 10px;
`;

export default function({ onClose, onProgress }) {
  return (
    <Dialog onClose={onClose}>
      <Headline size="S" font="sub">
        Log your progress
      </Headline>
      <Content>Did you master the challenge today?</Content>
      <CheckboxContainer>
        <Label htmlFor="yes">
          YES <i className="far fa-thumbs-up" />
        </Label>
        <Checkbox
          name="progress"
          type="radio"
          value="yes"
          onClick={onProgress}
        />
        <Label htmlFor="no">
          NO <i className="far fa-thumbs-down" />
        </Label>
        <Checkbox
          name="progress"
          type="radio"
          onChange={onProgress}
          value="no"
        />
      </CheckboxContainer>
      <ButtonLink to="/challenges"> Not now</ButtonLink>
    </Dialog>
  );
}
