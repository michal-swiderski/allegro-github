import styled from 'styled-components';

export const ErrorWrapper = styled.div`
  text-align: center;
  padding: ${props => props.theme.spacing.padding * 2}px;
  color: ${props => props.theme.colors.textColorSecondary};
  font-size: 2.4rem;
`;

export const NoWrap = styled.span`
  white-space: nowrap;
`;
