import styled from 'styled-components';

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

export const RepoLink = styled.a`
  text-decoration: none;
  font-weight: bold;
  
  :link, :visited {
    color: ${props => props.theme.colors.primary};
  }
  
  :hover {
    text-decoration: underline;
  }
`;

export const BadgesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: ${props => props.theme.spacing.padding}px;
`;
