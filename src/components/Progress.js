import {
  CircularProgressbarWithChildren,
  buildStyles
} from 'react-circular-progressbar';
import styled from 'styled-components';
import 'react-circular-progressbar/dist/styles.css';
import React from 'react';
import propTypes from 'prop-types';

const ProgressContainer = styled.div`
  height: 50px;
  width: 50px;
  position: absolute;
  top: 5px;
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
          textColor: 'white',
          pathColor: 'white',
          trailColor: '#7c5d6a',
          textSize: '200%',
          strokeLinecap: 'butt'
        })}
      />
    </ProgressContainer>
  );
}

ProgressContainer.propTypes = {
  percentage: propTypes.number
};
export default Progress;
