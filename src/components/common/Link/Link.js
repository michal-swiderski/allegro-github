import styled from 'styled-components';

export const StyledLink = styled.a`
  text-decoration: none;
  font-weight: bold;
  
  :link, :visited {
    color: ${props => props.theme.colors.primary};
  }
  
  :hover {
    text-decoration: underline;
  }
`;
