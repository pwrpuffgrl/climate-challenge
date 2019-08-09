import React, { useState } from 'react';
import styled from 'styled-components';
import Headline from './Headline';
import PropTypes from 'prop-types';
import JoinButton from './JoinButton';
import CalendarIcon from './CalendarIcon';
import CategoryIcon from './CategoryIcon';
import * as moment from 'moment';
import Progress from '../components/Progress';
import ProgressButton from '../components/PorgressButton';

const StyledCard = styled.div`
  padding: 20px;
  border-radius: 12px;
  margin: 15px;
  position: relative;
  box-shadow: 12px 7px 17px 1px rgba(209, 205, 209, 1);
  animation: ${props => props.animation} 5s;
`;

const Content = styled.p`
  font-family: helvetica;
  font-size: 16px;
  color: #46395c;
`;

const DateRange = styled.div`
  text-align: center;
  font-family: helvetica;
  font-size: 16px;
  position: absolute;
  bottom: 20px;
  left: 45px;
  color: #46395c;
`;

function Card({ challenge, onJoin, joined, onProgress }) {
  const [showDate, setShowDate] = useState(false);

  const today = moment();
  const start = moment(challenge.startDate);
  const end = moment(challenge.endDate);
  const timeLeft = end.diff(today, 'days');
  const timePassed = moment(challenge.lastParticipated).diff(start, 'days');
  const per = (timePassed / challenge.duration) * 100;
  const percentage = Math.round(per);

  function handleJoinClick() {
    onJoin(challenge._id);
  }

  function handleDateClick() {
    setShowDate(!showDate);
  }

  function renderDateType() {
    return joined ? (
      <DateRange>Ends in {timeLeft} days </DateRange>
    ) : (
      <DateRange>Duration: {challenge.duration} days </DateRange>
    );
  }
  function handleProgressClick() {
    onProgress(challenge);
  }

  return (
    <StyledCard>
      <Headline size="M" font="sub">
        {challenge.title}
        <CategoryIcon category={challenge.category} />
      </Headline>
      <Content>{challenge.rules}</Content>
      <Content>{challenge.tips}</Content>
      <JoinButton joined={challenge.joined} onClick={handleJoinClick} />
      <CalendarIcon onClick={handleDateClick} />
      {showDate && renderDateType()}
      {joined && <Progress percentage={percentage} />}
      {joined && <ProgressButton onClick={handleProgressClick} />}
    </StyledCard>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  rules: PropTypes.string,
  tips: PropTypes.string,
  duration: PropTypes.number,
  joined: PropTypes.bool
};

export default Card;
