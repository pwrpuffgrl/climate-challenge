import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const StyledIcon = styled.div`
  margin: 8px;
  font-size: 22px;
  display: inline-block;
`;

function getIcon(category) {
  const iconMapping = {
    waste: 'fas fa-recycle',
    transportation: 'fas fa-car-side',
    activism: 'fas fa-fist-raised',
    agriculture: 'fab fa-pagelines',
    default: 'fas fa-recycle'
  };

  return iconMapping[category] || iconMapping.default;
}

function CategoryIcon({ category }) {
  return (
    <StyledIcon>
      <i className={`${getIcon(category)}`} />
    </StyledIcon>
  );
}

CategoryIcon.propTypes = {
  category: propTypes.string
};
export default CategoryIcon;
