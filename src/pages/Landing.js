import React from 'react';
import Fullscreen from '../components/Fullscreen';
import Headline from '../components/Headline';
import MainLogo from '../components/MainLogo';
import styled from 'styled-components';
import { fadeIn, fadeOut, appear } from '../utils/animations';
import BackgroundImage from '../components/BackgroundImage';
import Background from '../Images/AppBackground.png';
import ButtonLink from '../components/ButtonLink';

const Span = styled.span`
  color: lightblue;
  animation: ${props => props.animation} 9s;
`;

const Title = styled(Headline)`
  color: white;
  font-family: 'Raleway';
  font-size: 36px;
`;

function Landing() {
  return (
    <>
      <BackgroundImage src={Background} />
      <Fullscreen>
        <div>
          <MainLogo animation={fadeIn} />
          <MainLogo animation={fadeOut} />
        </div>
        <Title>
          Climate Cha<Span animation={appear}>lle</Span>nge
        </Title>
        <ButtonLink to="/Challenges">Click to Start</ButtonLink>
      </Fullscreen>
    </>
  );
}

export default Landing;
