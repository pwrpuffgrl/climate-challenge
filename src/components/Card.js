import React from 'react';
import styled from 'styled-components';
import Headline from './Headline';
import PropTypes from 'prop-types';

const StyledCard = styled.div`
  min-height: 240px;
  min-width: 320px;
  padding: 20px;
  border-radius: 12px;
  background: #d3e7ee;
  opacity: 70%;
`;

function Card({ title, ...props }) {
  return (
    <StyledCard>
      <Headline size="S" font="sub">
        {title}
      </Headline>
      <p />
    </StyledCard>
  );
}

Card.propTypes = {
  title: PropTypes.string
};

export default Card;
