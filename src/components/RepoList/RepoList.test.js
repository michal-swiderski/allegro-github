import {renderWithProviders} from "../../testUtils";
import {screen} from "@testing-library/react";
import React from "react";
import RepoList from "./RepoList";
import {ERROR_UNKNOWN, ERROR_USER_NOT_FOUND} from "../../constants";

test('It should display a repo list', async () => {
  const repo1 = {
    id: 1,
    clone_url: 'https://github.com/allegro/bigcache',
    name: 'bigcache',
    stargazers_count: 4792,
    forks_count: 403,
    language: 'Go',
    license: {
      name: 'Apache license 2.0'
    }
  };

  const repo2 = {
    ...repo1,
    id: 2
  }

  renderWithProviders(<RepoList/>, {
    initialState: {
      repos: {
        username: 'allegro',
        items: [repo1, repo2],
        error: null,
        currentPage: 1,
        itemsPerPage: 2
      }
    }
  });

  expect(screen.getAllByTestId('repo-tile')).toHaveLength(2);
});

test('It should display a message when user has no repositories', async () => {
  renderWithProviders(<RepoList/>, {
    initialState: {
      repos: {
        username: 'allegro',
        items: [],
        totalCount: 0,
        error: null,
        currentPage: 1,
        itemsPerPage: 2
      }
    }
  });

  expect(screen.getByText(/any public repositories/)).toBeInTheDocument();
});

test('It should display a message when user has not been found', async () => {
  const username = 'allegro';
  renderWithProviders(<RepoList/>, {
    initialState: {
      repos: {
        username,
        error: ERROR_USER_NOT_FOUND,
        items: []
      }
    }
  });

  expect(screen.getByText(`User ${username} not found.`)).toBeInTheDocument();
});

test('It should display a message when an unknown error has occured', async () => {
  const username = 'allegro';
  renderWithProviders(<RepoList/>, {
    initialState: {
      repos: {
        username,
        error: ERROR_UNKNOWN,
        items: []
      }
    }
  });

  expect(screen.getByText(`Something went wrong. Try again`)).toBeInTheDocument();
});
