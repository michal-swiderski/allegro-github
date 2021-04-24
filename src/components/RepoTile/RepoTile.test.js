import {renderWithProviders} from "../../testUtils";
import {screen} from "@testing-library/react";
import React from "react";
import RepoTile from "./RepoTile";

test('It should display repo information', async () => {
  const repo = {
    id: 123,
    clone_url: 'https://github.com/allegro/bigcache',
    name: 'bigcache',
    stargazers_count: 4792,
    forks_count: 403,
    language: 'Go',
    license: {
      name: 'Apache license 2.0'
    }
  };

  renderWithProviders(<RepoTile repo={repo}/>);

  expect(screen.getByText(repo.name)).toBeInTheDocument();
  expect(screen.getByText(repo.name)).toHaveAttribute('href', repo.clone_url);
  expect(screen.getByText(repo.stargazers_count)).toBeInTheDocument();
  expect(screen.getByText(repo.forks_count)).toBeInTheDocument();
  expect(screen.getByText(repo.language)).toBeInTheDocument();
  expect(screen.getByText(repo.license.name)).toBeInTheDocument();
});
