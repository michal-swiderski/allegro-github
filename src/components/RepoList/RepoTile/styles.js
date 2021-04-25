import styled from 'styled-components';

export const MainWrapper = styled.div`
  padding: ${props => props.theme.spacing.padding}px;
  border-bottom: 1px solid ${props => props.theme.colors.borderGray};
  
  &:first-child {
    border-top: 1px solid ${props => props.theme.colors.borderGray};
  }
`;

export const DescriptionText = styled.span`
  color: ${props => props.theme.colors.textColorSecondary};
  font-size: 1.4rem;
`

export const BadgesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: ${props => props.theme.spacing.padding}px;
`;

export const MockRectangle = styled.div`
  width: ${props => props.width};
  height: ${props => props.theme.spacing.padding}px;
  border-radius: 2px;
  background-color: ${props => props.theme.colors.borderGray};
  margin-bottom: ${props => props.theme.spacing.padding / 2}px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;
