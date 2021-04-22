import React from 'react';
import PropTypes from 'prop-types';
import {StyledOverlay} from "./styles";

const LoadingOverlay = ({show}) => {
  return (
    <StyledOverlay show={show}/>
  );
};

LoadingOverlay.propTypes = {
  show: PropTypes.bool.isRequired
};

export default LoadingOverlay;
