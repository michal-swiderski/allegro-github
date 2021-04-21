import styled from 'styled-components';
import breakpoints from "../../breakpoints";

export const MainWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  margin-bottom: ${props => props.theme.spacing.padding}px;
`;

export const InputWrapper = styled.div`
  padding-right: ${props => props.theme.spacing.padding / 2}px;
  padding-bottom: ${props => props.theme.spacing.padding / 2}px;
  
  @media (max-width: ${breakpoints.sm}) {
    width: 100%;
    padding-right: 0;
  }
`;

export const ButtonWrapper = styled.div`
  @media (max-width: ${breakpoints.sm}) {
    width: 100%;
  }
`;
