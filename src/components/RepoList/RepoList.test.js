import {renderWithProviders} from "../../testUtils";
import {screen} from "@testing-library/react";
import React from "react";
import RepoList from "./RepoList";

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
