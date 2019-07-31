import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
  height: 60px;
  background: #242d42;
  position: fixed;
  z-index: 5;
  bottom: 0;
  right: 0;
  left: 0;
`;

function Footer() {
  return <StyledFooter />;
}

export default Footer;
