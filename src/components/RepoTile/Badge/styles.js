import styled from 'styled-components';

export const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.textColorSecondary};
  margin-right: ${props => props.theme.spacing.padding}px;
  
  & > :first-child {
    margin-right: ${props => props.theme.spacing.padding / 4}px;
  }
`;
