import React, { useState } from 'react';
import styled from 'styled-components';
import Headline from './Headline';
import PropTypes from 'prop-types';
import JoinButton from './JoinButton';
import CalendarIcon from './CalendarIcon';
import CategoryIcon from './CategoryIcon';
import * as moment from 'moment';
import Progress from '../components/Progress';
import CardHeaderImage from '../Images/CardHeader.png';
import ProgressButton from '../components/PorgressButton';
import { cardFade } from '../utils/animations';

const StyledCard = styled.div`
  margin: 15px;
  position: relative;
  background: white;
  box-shadow: 11px 6px 36px -2px rgba(0, 0, 0, 0.26);
  animation: ${cardFade} 2s ease 1 both;
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
        <CalendarIcon onClick={handleDateClick} />
        {showDate && renderDateType()}
        {joined && <Progress percentage={percentage} />}
        {joined && <ProgressButton onClick={handleProgressClick} />}
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
