import React from 'react';
import styled from 'styled-components';
import Headline from '../components/Headline';
import HeaderImage from '../Images/HeaderBackground.png';

const StyledHeader = styled.div`
  height: 60px;
  background-image: url(${HeaderImage});
`;
const StyledHeadline = styled(Headline)`
  color: rgb(37, 48, 68);
  margin: 0;
  padding: 10px;
  text-align: center;
`;

function Header({ title, ...props }) {
  return (
    <>
      <StyledHeader>
        <StyledHeadline size="L" font="main">
          {title}
        </StyledHeadline>
      </StyledHeader>
    </>
  );
}

export default Header;
