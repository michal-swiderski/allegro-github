import React from 'react';
import PropTypes from 'prop-types';
import {StyledOverlay} from "./styles";

const LoadingOverlay = ({show}) => {
  if(!show){
    return null;
  }

  return (
    <StyledOverlay/>
  );
};

LoadingOverlay.propTypes = {
  show: PropTypes.bool.isRequired
};

export default LoadingOverlay;
