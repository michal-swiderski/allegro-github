import styled from 'styled-components';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const StyledFooter = styled.footer`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: ${props => props.theme.spacing.padding / 2}px;
  margin-top: ${props => props.theme.spacing.padding}px;
  font-size: 1.2rem;
  
  & > a {
    margin-right: ${props => props.theme.spacing.padding / 2}px;
  }
`;

export const CenteredIcon = styled(FontAwesomeIcon)`
  color: white;
  font-size: 1.6rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
