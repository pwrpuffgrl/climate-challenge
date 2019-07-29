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
  background: #bcaaa2;
  margin: 15px;
  position: relative;
  opacity: 0.9;
  box-shadow: 10px 10px 8px;
`;

const Content = styled.p``;

function Card({ data, onJoin }) {
  function handleClick() {
    onJoin(data);
  }
  return (
    <StyledCard>
      <Headline size="S" font="sub">
        {data.title}
      </Headline>
      <Content>{data.rules}</Content>
      <JoinButton onClick={handleClick} />
      {data.duration}
    </StyledCard>
  );
}

Card.propTypes = {
  title: PropTypes.string
};

export default Card;
