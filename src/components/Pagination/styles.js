import styled from 'styled-components';

export const MainWrapper = styled.div`
  margin-top: ${props => props.theme.spacing.padding}px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  
  & > *:not(:last-child) {
    margin-right: 16px;
  }
`;
