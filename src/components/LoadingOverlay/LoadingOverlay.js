import React from 'react';
import PropTypes from 'prop-types';
import {StyledOverlay} from "./styles";

const LoadingOverlay = ({show}) => {
  return (
    <StyledOverlay data-testid="loading-overlay" show={show}/>
  );
};

LoadingOverlay.propTypes = {
  show: PropTypes.bool.isRequired
};

export default LoadingOverlay;
