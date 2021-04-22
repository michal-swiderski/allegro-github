import './App.css';
import React from "react";
import MainContainer from "./components/MainContainer/MainContainer";
import Footer from "./components/Footer/Footer";
import {darkTheme, lightTheme} from "./themes";
import {ThemeProvider} from "styled-components";
import {useSelector} from "react-redux";
import {getTheme} from "./store/selectors";
import GlobalStyle from "./styles/global";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  const isDarkTheme = useSelector(getTheme);

  return (
    <Router>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <GlobalStyle/>
        <div className="App">
          <span/>
          <div>
            <Switch>
              <Route path="/:username?/:page?">
                <MainContainer/>
              </Route>
            </Switch>
          </div>
          <Footer/>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
