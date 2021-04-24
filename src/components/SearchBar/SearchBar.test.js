import {renderWithProviders} from "../../testUtils";
import {fireEvent, screen} from "@testing-library/react";
import React from "react";
import SearchBar from "./SearchBar";
import {createBrowserHistory} from "history";

test('It should disable \'Search\' button when textbox is empty', async () => {
  renderWithProviders(<SearchBar/>);

  expect(screen.getByText('Search')).toHaveAttribute('disabled');
});

test('Search button should be active when the textbox is not empty', async () => {
  const username = 'allegro';
  renderWithProviders(<SearchBar/>);

  fireEvent.change(screen.getByPlaceholderText('Username...'), {target: {value: username}});

  expect(screen.getByText('Search')).not.toHaveAttribute('disabled');
});

test('It should change route upon clicking \'Search\'', async () => {
  const username = 'allegro';
  const history = createBrowserHistory();
  renderWithProviders(<SearchBar/>, {history});

  fireEvent.change(screen.getByPlaceholderText('Username...'), {target: {value: username}});
  fireEvent.click(screen.getByText('Search'));

  expect(history.location.pathname).toEqual(`/${username}/1`);
});

test('It should display username properly', async () => {
  const username = 'allegro';
  renderWithProviders(<SearchBar/>, {
    initialState: {
      repos: {
        username
      }
    }
  });

  expect(screen.getByPlaceholderText('Username...')).toHaveValue(username);
});
