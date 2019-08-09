import {
  CircularProgressbarWithChildren,
  buildStyles
} from 'react-circular-progressbar';
import styled from 'styled-components';
import 'react-circular-progressbar/dist/styles.css';
import React from 'react';

const ProgressContainer = styled.div`
  height: 60px;
  width: 60px;
  position: absolute;
  top: 15px;
  right: 15px;
`;
function Progress({ percentage }) {
  return (
    <ProgressContainer>
      <CircularProgressbarWithChildren
        percentage={percentage}
        value={percentage}
        text={`${percentage}%`}
        strokeWidth={12}
        height={25}
        width={25}
        styles={buildStyles({
          textColor: '#6b8c79',
          pathColor: '#6b8c79',
          trailColor: 'lightgray',
          textSize: '160%'
        })}
      />
    </ProgressContainer>
  );
}

export default Progress;
