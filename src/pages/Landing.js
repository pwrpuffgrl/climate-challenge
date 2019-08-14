import React from 'react';
import Fullscreen from '../components/Fullscreen';
import Headline from '../components/Headline';
import MainLogo from '../components/MainLogo';
import styled from 'styled-components';
import { fadeIn, fadeOut, appear } from '../utils/animations';
import ButtonLink from '../components/ButtonLink';
import Background from '../Images/Abstract4.png';

const Span = styled.span`
  color: white;
  animation: ${props => props.animation} 9s;
`;
const BackgroundDiv = styled.div`
  background: url(${Background});
  background-size: cover;
  height: 100vh;
`;

const Title = styled(Headline)`
  color: white;
  font-family: 'Raleway';
  font-size: 32px;
`;

const StartLink = styled(ButtonLink)`
  animation: ${props => props.animation} 9s;
`;

function Landing() {
  return (
    <>
      <BackgroundDiv>
        <Fullscreen>
          <div>
            <MainLogo animation={fadeIn} />
            <MainLogo animation={fadeOut} />
          </div>
          <Title>
            Climate Cha<Span animation={appear}>lle</Span>nge
          </Title>
          <StartLink animation={appear} to="/login">
            Login
          </StartLink>
        </Fullscreen>
      </BackgroundDiv>
    </>
  );
}

export default Landing;
