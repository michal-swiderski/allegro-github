import React from 'react'
import {fireEvent, screen} from '@testing-library/react'
import {renderWithProviders} from '../../testUtils';
import Pagination from "./Pagination";
import 'jest-styled-components';
import {createStore} from "redux";
import rootReducer from '../../store/reducers';
import {createBrowserHistory} from "history";

test('Displays current page and calculates number of pages correctly', async () => {
  renderWithProviders(<Pagination/>, {
    initialState: {
      repos: {
        currentPage: 1,
        totalCount: 50
      }
    }
  });

  // \xa0 not working?
  expect(screen.getByText(/1.\/.10/)).toBeInTheDocument();
});

test('Next button is disabled and previous button is active when on the last page', async () => {
  const store = createStore(rootReducer, {
    repos: {
      currentPage: 10,
      totalCount: 50,
      perPage: 5
    }
  });

  renderWithProviders(<Pagination/>, {store});

  expect(screen.getByTitle('Previous page')).not.toHaveAttribute('disabled');
  expect(screen.getByTitle('Next page')).toHaveAttribute('disabled');
});

test('Previous button is disabled and \'next\' button is active when on the first page', async () => {
  const store = createStore(rootReducer, {
    repos: {
      currentPage: 1,
      totalCount: 50,
      perPage: 5
    }
  });

  renderWithProviders(<Pagination/>, {store});

  expect(screen.getByTitle('Previous page')).toHaveAttribute('disabled');
  expect(screen.getByTitle('Next page')).not.toHaveAttribute('disabled');
});

test('It changes page upon clicking the \'Next\' button', async () => {
  const username = 'allegro';
  const page = 1;
  const store = createStore(rootReducer, {
    repos: {
      username: 'allegro',
      currentPage: page,
      totalCount: 50,
      perPage: 5
    }
  });
  const history = createBrowserHistory();
  renderWithProviders(<Pagination/>, {store, history});

  fireEvent.click(screen.getByTitle('Next page'));
  expect(history.location.pathname).toEqual(`/${username}/${page + 1}`);
});

test('It changes page upon clicking the \'Previous\' button', async () => {
  const username = 'allegro';
  const page = 2;
  const store = createStore(rootReducer, {
    repos: {
      username: 'allegro',
      currentPage: page,
      totalCount: 50,
      perPage: 5
    }
  });
  const history = createBrowserHistory();
  renderWithProviders(<Pagination/>, {store, history});

  fireEvent.click(screen.getByTitle('Previous page'));
  expect(history.location.pathname).toEqual(`/${username}/${page - 1}`);
});
