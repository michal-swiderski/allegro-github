import styled from 'styled-components';
import {StyledLink} from "../common/Link/Link";

export const MainWrapper = styled.div`
  padding: ${props => props.theme.spacing.padding}px;
  border-bottom: 1px solid ${props => props.theme.colors.borderGray};
  transition: transform 0.2s;
  
  &:first-child {
    border-top: 1px solid ${props => props.theme.colors.borderGray};
  }
  
  :hover {
    //transform: translateX(5px);
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
  height: 16px;
  border-radius: 2px;
  background-color: lightgray;
  margin-bottom: ${props => props.theme.spacing.padding / 2}px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;
