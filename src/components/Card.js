import React, { useState } from 'react';
import styled from 'styled-components';
import Headline from './Headline';
import PropTypes from 'prop-types';
import JoinButton from './JoinButton';
import CalendarIcon from './CalendarIcon';
import CategoryIcon from './CategoryIcon';

const StyledCard = styled.div`
  min-height: 240px;
  min-width: 320px;
  padding: 20px;
  border-radius: 12px;
  background: #d3e7ee;
  margin: 15px;
  position: relative;
  opacity: 0.9;
  box-shadow: 10px 10px 8px;
  animation: ${props => props.animation} 5s;
`;

const Content = styled.p`
  font-family: helvetica;
  font-size: 16px;
`;

const DateRange = styled.div`
  background: #d3e7ee;
  width: 250px;
  box-shadow: 10px 10px 8px;
  text-align: center;
  font-family: helvetica;
  font-size: 16px;
  position: absolute;
  bottom: 20px;
  left: 45px;
`;

function Card({ challenge, onJoin, onDate }) {
  const [showDate, setShowDate] = useState(false);

  function handleJoinClick() {
    onJoin(challenge._id);
  }

  function handleDateClick() {
    onDate(challenge);
    setShowDate(!showDate);
    console.log('calendar');
  }

  return (
    <StyledCard>
      <Headline size="S" font="sub">
        {challenge.title}
        <CategoryIcon category={challenge.category} />
      </Headline>
      <Content>{challenge.rules}</Content>
      <JoinButton joined={challenge.joined} onClick={handleJoinClick} />
      <CalendarIcon onClick={handleDateClick} />
      {showDate && (
        <DateRange>
          Start:
          {challenge.startDate}
        </DateRange>
      )}
    </StyledCard>
  );
}

Card.propTypes = {
  title: PropTypes.string
};

export default Card;
