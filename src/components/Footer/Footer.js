import React from 'react';
import {CenteredIcon, StyledFooter} from "./styles";
import ReactSwitch from "react-switch";
import {faMoon} from "@fortawesome/free-regular-svg-icons";
import {faSun} from "@fortawesome/free-solid-svg-icons";
import {useDispatch, useSelector} from "react-redux";
import {getTheme} from "../../store/selectors";
import {setDarkTheme} from "../../store/actions";
import {withTheme} from "styled-components";

const Footer = () => {
  const dispatch = useDispatch();
  const darkTheme = useSelector(getTheme);

  const handleCheck = () => {
    dispatch(setDarkTheme(!darkTheme));
  }

  return (
    <StyledFooter>
      <a href="https://github.com/michal-swiderski" target="_blank" rel="noreferrer">Michał Świderski 2021</a>
      <ReactSwitch
        onChange={handleCheck}
        checked={!darkTheme}
        uncheckedIcon={<CenteredIcon icon={faMoon}/>}
        checkedIcon={<CenteredIcon icon={faSun}/>}
      />
    </StyledFooter>
  );
};

export default withTheme(Footer);
