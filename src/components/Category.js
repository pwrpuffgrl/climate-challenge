import React from 'react';
import styled from 'styled-components';

const StyledIcon = styled.div`
  margin: 8px;
  display: inline-block;
`;
function CategoryIcon({ category }) {
  return (
    <StyledIcon>
      {category === 'plastic' ? (
        <i class="fas fa-recycle" />
      ) : category === 'transportation' ? (
        <i class="fas fa-car-side" />
      ) : (
        <i class="fab fa-pagelines" />
      )}
    </StyledIcon>
  );
}

export default CategoryIcon;
