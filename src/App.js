import './App.css';
import React from "react";
import MainContainer from "./components/MainContainer/MainContainer";
import Footer from "./components/Footer/Footer";
import {darkTheme, lightTheme} from "./style/themes";
import {ThemeProvider} from "styled-components";
import {useSelector} from "react-redux";
import {getTheme} from "./store/selectors";
import GlobalStyle from "./style/global";
import history from './history';
import {
  Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function App() {
  const isDarkTheme = useSelector(getTheme);

  return (
    <Router history={history}>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <GlobalStyle/>
        <div className="App">
            <Switch>
              <Route exact path="/:username/">
                {props => <Redirect to={`/${props.match.params.username}/1`}/>}
              </Route>
              <Route exact path="/:username?/:page([1-9][0-9]*)?">
                <MainContainer/>
              </Route>
              <Redirect to="/"/>
            </Switch>
          <Footer/>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
