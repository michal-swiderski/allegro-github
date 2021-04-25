import styled from 'styled-components';
import breakpoints from "../../style/breakpoints";

export const MainWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  
  @media (max-width: ${breakpoints.sm}) {
    justify-content: space-between;
  }
  
  @media (min-width: ${breakpoints.sm}) {
    & > *:not(:last-child) {
      margin-right: 8px;
    }
  }
`;

export const PagesWrapper = styled.span`
  color: ${props => props.theme.colors.textColorPrimary};
`;
