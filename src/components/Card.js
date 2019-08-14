import React, { useState } from 'react';
import styled from 'styled-components';
import Headline from './Headline';
import PropTypes from 'prop-types';
import JoinButton from './JoinButton';
import DeleteButton from './DeleteButton';
import CalendarIcon from './CalendarIcon';
import CategoryIcon from './CategoryIcon';
import * as moment from 'moment';
import Progress from '../components/Progress';
import CardHeaderImage from '../Images/CardHeader.png';
import ProgressButton from '../components/PorgressButton';

const StyledCard = styled.div`
  margin: 15px;
  position: relative;
  background: white;
  min-width: 340px;
  box-shadow: 11px 6px 36px -2px rgba(0, 0, 0, 0.26);
`;

const Content = styled.p`
  font-family: helvetica;
  font-size: 16px;
  color: #46395c;
  padding-bottom: 15px;
  font-weight: 200;
  line-height: 1.4;
`;

const DateRange = styled.div`
  text-align: center;
  font-family: helvetica;
  font-size: 16px;
  position: absolute;
  font-weight: 200;
  line-height: 1.4;
  bottom: 12px;
  left: 45px;
  color: #46395c;
`;

const CardHeader = styled.div`
  width: 100%;
  height: 60px;
  text-align: left;
  object-fit: cover;
  margin: 0;
  color: white;
  background: url(${CardHeaderImage});
`;
const ContentContainer = styled.div`
  padding: 10px;
  margin-bottom: 10px;
`;

const Streak = styled.div`
  right: 94px;
  bottom: 13px;
  position: absolute;
  border: solid #6b5f81 1.5px;
  color: #6b5f81;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 22px;
  width: 22px;
`;

function Card({ challenge, onJoin, joined, onProgress, onDelete }) {
  const [showDate, setShowDate] = useState(false);
  const start = moment(challenge.startDate);
  const end = moment(challenge.endDate);
  const timeLeft = end.endOf('day').fromNow();
  const timePassed = moment(challenge.lastParticipated).diff(start, 'days');
  const per = (timePassed / challenge.duration) * 100;
  const percent = Math.round(per);
  const [percentage, setPercentage] = useState(percent);

  function handleJoinClick() {
    onJoin(challenge._id);
  }

  function handleDateClick() {
    setShowDate(!showDate);
  }

  function handleDeleteClick() {
    onDelete(challenge._id);
  }

  function renderDateType() {
    return joined ? (
      <DateRange>Ends {timeLeft} </DateRange>
    ) : (
      <DateRange>Duration: {challenge.duration} days </DateRange>
    );
  }
  function handleProgressClick() {
    onProgress(challenge);
    setPercentage(percent);
  }

  return (
    <StyledCard>
      <CardHeader>
        <Headline size="M" font="sub">
          {challenge.title}
          <CategoryIcon category={challenge.category} />
        </Headline>
      </CardHeader>
      <ContentContainer>
        <Content>{challenge.rules}</Content>
        <Content>{challenge.tips}</Content>
        <JoinButton joined={challenge.joined} onClick={handleJoinClick} />
        {!joined && <DeleteButton onClick={handleDeleteClick} />}
        <CalendarIcon onClick={handleDateClick} />
        {showDate && renderDateType()}
        {joined && <Progress percentage={percentage} />}
        {joined && <ProgressButton onClick={handleProgressClick} />}
        {joined && <Streak>{challenge.streak}</Streak>}
      </ContentContainer>
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
