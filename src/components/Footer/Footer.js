import React from 'react';
import {CenteredIcon, StyledFooter} from "./styles";
import ReactSwitch from "react-switch";
import {faSun} from "@fortawesome/free-solid-svg-icons";
import {faMoon} from "@fortawesome/free-regular-svg-icons";
import {useDispatch, useSelector} from "react-redux";
import {getTheme} from "../../store/selectors";
import {toggleTheme} from "../../store/actions";
import {withTheme} from "styled-components";

const Footer = props => {
  const dispatch = useDispatch();
  const darkTheme = useSelector(getTheme);

  const handleCheck = () => {
    dispatch(toggleTheme());
  }

  return (
    <StyledFooter>
      <a href="https://github.com/michal-swiderski" target="_blank" rel="noreferrer">Michał Świderski</a>
      <ReactSwitch
        onChange={handleCheck}
        checked={!darkTheme}
        uncheckedIcon={<CenteredIcon icon={faMoon}/>}
        checkedIcon={<CenteredIcon icon={faSun}/>}
      />
    </StyledFooter>
  );
};

Footer.propTypes = {

};

export default withTheme(Footer);
