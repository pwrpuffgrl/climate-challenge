import React from 'react';
import styled from 'styled-components';

const StyledIcon = styled.div`
  margin: 8px;
  display: inline-block;
`;

function getIcon(category) {
  const iconMapping = {
    plastic: 'fas fa-recycle',
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

export default CategoryIcon;
