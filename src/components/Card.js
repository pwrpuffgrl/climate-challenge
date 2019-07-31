import React, { useState } from 'react';
import styled from 'styled-components';
import Headline from './Headline';
import PropTypes from 'prop-types';
import JoinButton from './JoinButton';
import CalendarIcon from './CalendarIcon';
import CategoryIcon from './Category';
import Calendar from '../components/Calendar';

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
`;

const Content = styled.p`
  font-family: helvetica;
  font-size: 16px;
`;

function Card({ challenge, onJoin, onDate }) {
  const [show, setShow] = useState(false);

  function handleClick() {
    onJoin(challenge._id);
    console.log(challenge.category);
  }

  function handleDateClick() {
    onDate(challenge);
    setShow(!show);
    console.log('calendar');
  }

  return (
    <>
      <StyledCard>
        <Headline size="S" font="sub">
          {challenge.title}
          <CategoryIcon category={challenge.category} />
        </Headline>
        <Content>{challenge.rules}</Content>
        <JoinButton joined={challenge.joined} onClick={handleClick} />
        <CalendarIcon onClick={handleDateClick} />
      </StyledCard>
      {show && (
        <StyledCard>
          <Calendar />
        </StyledCard>
      )}
    </>
  );
}

Card.propTypes = {
  title: PropTypes.string
};

export default Card;
