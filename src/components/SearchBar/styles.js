import styled from 'styled-components';
import breakpoints from "../../breakpoints";

export const MainWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: ${props => props.theme.spacing.padding}px;
`;

export const PaginationWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  
  @media (max-width: ${breakpoints.md}) {
    flex-basis: 100%;
    margin-bottom: 8px;
  }
  
  @media (max-width: ${breakpoints.sm}) {
    flex-basis: 100%;
    //justify-content: center;
    margin-bottom: 8px;
  }
`

export const SearchWrapper = styled.form`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: ${breakpoints.md}) {
    flex-basis: 100%;
  }
`

export const InputWrapper = styled.div`
  padding-right: ${props => props.theme.spacing.padding / 2}px;
  
  @media (max-width: ${breakpoints.md}) {
    flex-grow: 1;
  }
  
  @media (max-width: ${breakpoints.sm}) {
    padding-right: 0;
    margin-bottom: 8px;
  }
`;

export const ButtonWrapper = styled.div`
  @media (max-width: ${breakpoints.sm}) {
    flex-basis: 100%;
  }
`;
