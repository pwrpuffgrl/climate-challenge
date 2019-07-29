import React from 'react';
import styled from 'styled-components';
import Headline from './Headline';
import PropTypes from 'prop-types';
import JoinButton from './JoinButton';

const StyledCard = styled.div`
  min-height: 240px;
  min-width: 320px;
  padding: 20px;
  border-radius: 12px;
  background: #d3e7ee;
  opacity: 70%;
  margin: 15px;
  position: relative;
`;

const Content = styled.p``;

function Card({ data }) {
  return (
    <StyledCard>
      <Headline size="S" font="sub">
        {data.title}
      </Headline>
      <Content>{data.rules}</Content>
      <JoinButton />
      {data.duration}
    </StyledCard>
  );
}

Card.propTypes = {
  title: PropTypes.string
};

export default Card;
