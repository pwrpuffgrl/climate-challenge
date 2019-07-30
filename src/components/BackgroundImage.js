import styled from 'styled-components';

const BackgroundImage = styled.img`
  position: absolute;
  z-index: -1;
  height: 100vh;
  width: 100vw;
  object-fit: cover;
  filter: brightness(0.8) saturate(1.5);
`;

export default BackgroundImage;
