import React from 'react';
import styled from 'styled-components';
import Headline from './Headline';
import PropTypes from 'prop-types';
import JoinButton from './JoinButton';
import Calender from './Calender';

const StyledCard = styled.div`
  min-height: 240px;
  min-width: 320px;
  padding: 20px;
  border-radius: 12px;
  background: #d3e7ee;
  margin: 15px;
  position: relative;
  opacity: 0.8;
  box-shadow: 10px 10px 8px;
`;

const Content = styled.p`
  font-family: helvetica;
  font-size: 16px;
`;

function Card({ challenge, onJoin, onDuration }) {
  function handleClick() {
    onJoin(challenge._id);
  }

  function handleDurationClick() {
    onDuration(challenge.duration);
  }

  return (
    <StyledCard>
      <Headline size="S" font="sub">
        {challenge.title}
      </Headline>
      <Content>{challenge.rules}</Content>
      <JoinButton joined={challenge.joined} onClick={handleClick} />
      <Calender onClick={handleDurationClick} />
    </StyledCard>
  );
}

Card.propTypes = {
  title: PropTypes.string
};

export default Card;
