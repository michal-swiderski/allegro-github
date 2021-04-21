import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {MainWrapper} from "./styles";
import {faCodeBranch} from "@fortawesome/free-solid-svg-icons";

const Badge = props => {
  return (
    <MainWrapper>
      {props.icon && <FontAwesomeIcon icon={props.icon}/>}
      {props.label}
    </MainWrapper>
  );
};

Badge.propTypes = {
  icon: PropTypes.object,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

export default Badge;
