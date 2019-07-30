import React from 'react';
import Fullscreen from '../components/Fullscreen';
import Headline from '../components/Headline';
import MainLogo from '../components/MainLogo';
import styled from 'styled-components';
import { fadeIn, fadeOut, appear } from '../utils/animations';
import BackgroundImage from '../components/BackgroundImage';

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
      <Fullscreen>
        <BackgroundImage src="https://www.androidworld.it/wp-content/uploads/2016/11/wallpaper-oneplus-3t-4.jpg" />
        <div>
          <MainLogo animation={fadeIn} />
          <MainLogo animation={fadeOut} />
        </div>
        <Title>
          Climate Cha<Span animation={appear}>lle</Span>nge
        </Title>
      </Fullscreen>
    </>
  );
}

export default Landing;
