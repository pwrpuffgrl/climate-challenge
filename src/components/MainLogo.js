import styled from 'styled-components';
import Logo from './Logo';

const MainLogo = styled(Logo)`
  margin-left: 0px; 
  width: 100px;
  height: 100px;
  animation: ${props => props.animation} 2s ease-out 1 both;
}
`;

export default MainLogo;
