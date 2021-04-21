import styled from 'styled-components';

export const StyledOverlay = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.4;
  animation: fadein 0.2s linear;
  
  @keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0.4;
    }
  }
  
`;
