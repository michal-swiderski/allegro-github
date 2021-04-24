import React from 'react'
import {render as rtlRender} from '@testing-library/react'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
// Import your own reducer
import reducer from './store/reducers';
import {ThemeProvider} from "styled-components";
import {lightTheme} from "./style/themes";
import {createBrowserHistory} from "history";
import {Router} from "react-router-dom";

function renderWithProviders(
  ui,
  {
    initialState,
    store = createStore(reducer, initialState),
    theme = lightTheme,
    history = createBrowserHistory(),
    ...renderOptions
  } = {}
) {
  function Wrapper({children}) {
    return (
      <Router history={history}>
        <Provider store={store}>
          <ThemeProvider theme={lightTheme}>
            {children}
          </ThemeProvider>
        </Provider>
      </Router>);
  }

  return rtlRender(ui, {wrapper: Wrapper, ...renderOptions})
}

// override render method
export {renderWithProviders}
