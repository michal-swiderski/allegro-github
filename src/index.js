import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './App';
import {Provider} from "react-redux";
import store from './store/store';
import {setDarkTheme} from "./store/actions";

const darkTheme = JSON.parse(localStorage.getItem('darkTheme'));
store.dispatch(setDarkTheme(darkTheme));

let prevValue = darkTheme;
store.subscribe(() => {
  let currentValue = store.getState().darkTheme;
  if(currentValue !== prevValue) {
    localStorage.setItem('darkTheme', JSON.stringify(store.getState().darkTheme));
    prevValue = currentValue;
  }
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
