import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Headline from './Headline';
import PropTypes from 'prop-types';
import JoinButton from './JoinButton';
import CalendarIcon from './CalendarIcon';
import CategoryIcon from './CategoryIcon';
import * as moment from 'moment';
import Progress from '../components/Progress';
import Dialog from '../components/Dialog';
import ButtonLink from '../components/ButtonLink';
import ProgressButton from '../components/PorgressButton';

const StyledCard = styled.div`
  padding: 20px;
  border-radius: 12px;
  background: #d3e7ee;
  margin: 15px;
  position: relative;
  opacity: 1;
  box-shadow: 10px 10px 8px;
  animation: ${props => props.animation} 5s;
`;

const Content = styled.p`
  font-family: helvetica;
  font-size: 16px;
`;

const DateRange = styled.div`
  background: #d3e7ee;
  text-align: center;
  font-family: helvetica;
  font-size: 16px;
  position: absolute;
  bottom: 20px;
  left: 45px;
`;

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

function Card({ challenge, onJoin, joined, onUpdateProgress }) {
  const [showDate, setShowDate] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  const today = moment();
  const start = moment(challenge.startDate);
  const end = moment(challenge.endDate);
  const duration = challenge.duration;
  const timeLeft = end.diff(today, 'days');
  const timePassed = moment(challenge.lastParticipated).diff(start, 'days');
  const per = (timePassed / duration) * 100;
  const percentage = Math.round(per);

  function handleJoinClick() {
    onJoin(challenge._id);
  }

  function handleDateClick() {
    setShowDate(!showDate);
  }

  function handleProgressClick() {
    setShowDialog(true);
  }

  function handleCheckbox(event) {
    const { value } = event.target;

    if (value === 'yes') {
      onUpdateProgress(today.toISOString());
    }

    setShowDialog(false);
  }

  function renderDateType() {
    return joined ? (
      <DateRange>Ends in {timeLeft} days </DateRange>
    ) : (
      <DateRange>Duration: {challenge.duration} days </DateRange>
    );
  }

  return (
    <>
      <StyledCard>
        <Headline size="S" font="sub">
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

      {showDialog && (
        <Dialog onClose={() => setShowDialog(false)}>
          <Headline size="S" font="sub">
            Log your progress for '{challenge.title}'
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
              onChange={handleCheckbox}
            />
            <Label htmlFor="no">
              NO <i className="far fa-thumbs-down" />
            </Label>
            <Checkbox
              name="progress"
              type="radio"
              onChange={handleCheckbox}
              value="no"
            />
          </CheckboxContainer>
          <ButtonLink to="/challenges"> Not now</ButtonLink>
        </Dialog>
      )}
    </>
  );
}

Card.propTypes = {
  title: PropTypes.string
};

export default Card;
