import './App.css';
import React from "react";
import MainContainer from "./components/MainContainer/MainContainer";
import Footer from "./components/Footer/Footer";
import {darkTheme, lightTheme} from "./themes";
import {ThemeProvider} from "styled-components";
import {useSelector} from "react-redux";
import {getTheme} from "./store/selectors";
import GlobalStyle from "./styles/global";

function App() {

  const isDarkTheme = useSelector(getTheme);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyle/>
      <div className="App">
        <span/>
        <div>
          <MainContainer/>
        </div>
        <Footer/>
      </div>
    </ThemeProvider>
  );
}

export default App;
