import React from 'react';
import styled from 'styled-components';
import Headline from './Headline';
import PropTypes from 'prop-types';

const StyledCard = styled.div`
  height: 240px;
  width: 320px;
  padding: 20px;
  border-radius: 12px;
  background: #d3e7ee;
  opacity: 70%;
`;

const Rules = styled.p``;

function Card() {
  return (
    <StyledCard>
      <Headline size="S">Example Card</Headline>
      <Rules />
    </StyledCard>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  rules: PropTypes.string
};

export default Card;
