import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const sizes = {
  S: '20px',
  M: '24px',
  L: '34px'
};

const fonts = {
  main: 'helvetica',
  sub: 'Merriweather'
};

function getSize(size) {
  return sizes[size] || sizes.M;
}

function getFont(font) {
  return fonts[font] || 'helvetica';
}

const StyledHeadline = styled.h1`
  font-size: ${props => getSize(props.size)};
  font-family: ${props => getFont(props.font)};
  font-weight: bold;
  margin: 0;
`;

function Headline({ size, font, ...props }) {
  return <StyledHeadline size={size} font={font} {...props} />;
}

Headline.propTypes = {
  size: PropTypes.oneOf(['S', 'M', 'L']),
  font: PropTypes.string
};

Headline.defaultProps = {
  size: 'M'
};

export default Headline;
