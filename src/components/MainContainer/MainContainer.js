import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ContainerDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  max-width: 800px;
  padding: ${props => props.theme.spacing.padding * 2}px;
  border: 1px solid ${props => props.theme.colors.borderGray};
  border-radius: 5px;
`;

const MainContainer = props => {
  return (
    <ContainerDiv>
      {props.children}
    </ContainerDiv>
  );
};

MainContainer.propTypes = {

};

export default MainContainer;
