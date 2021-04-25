import styled from 'styled-components';
import breakpoints from "../../style/breakpoints";

export const MainWrapper = styled.main`
  max-width: 800px;
  margin: auto;
  padding-top: ${props => props.theme.spacing.padding * 4}px;
  
  @media (max-width: ${breakpoints.sm}) {
    padding-top: ${props => props.theme.spacing.padding}px;
  }
`;

export const MainContentWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: ${props => props.theme.spacing.padding * 2}px;
  border: 1px solid ${props => props.theme.colors.borderGray};
  border-radius: 5px;
`;
