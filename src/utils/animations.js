import { keyframes } from 'styled-components';

export const fadeIn = props => keyframes`
  from {
    opacity: 0;
    transform: translate3d(-100px, 0px, 0px);
  }

  to {
    opacity: 1;
    transform: translate3d(70px, 0, 0);
  }
`;

export const fadeOut = props => keyframes`
  from {
    opacity: 0;
    transform: translate3d(100px, 0px, 0px);
  }

  to {
    opacity: 1;
    transform: translate3d(-70px, 0, 0);
  }
`;

export const appear = props => keyframes`
 from {
   opacity: 0;
 }


 to {
   opacity: 1;
 }
`;

export const disappear = props => keyframes`
from {
  opacity: 1;
}


to {
  opacity: 0;
}
`;
