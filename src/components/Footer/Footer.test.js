import {renderWithProviders} from "../../testUtils";
import {fireEvent, screen} from "@testing-library/react";
import React from "react";
import Footer from "./Footer";
import {createStore} from "redux";
import rootReducer from "../../store/reducers";

test('The switch is on when light theme is enabled', async () => {
  renderWithProviders(<Footer/>, {initialState: {darkTheme: false}});

  expect(screen.getByRole('switch')).toBeChecked();
});

test('The switch is off when dark theme is enabled', async () => {
  renderWithProviders(<Footer/>, {initialState: {darkTheme: true}});

  expect(screen.getByRole('switch')).not.toBeChecked();
});

test('It changes theme upon clicking the switch', async () => {
  const store = createStore(rootReducer, {
    darkTheme: false
  });

  renderWithProviders(<Footer/>, {store});

  fireEvent.click(screen.getByRole('switch'));

  expect(store.getState().darkTheme).toBeTruthy();
});
