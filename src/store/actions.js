import {Octokit} from "@octokit/rest";

export const SET_USERNAME = 'SET_USERNAME';
export const SET_REPOS = 'SET_REPOS';

const octokit = new Octokit();

export const setUsername = name => ({
  type: SET_USERNAME,
  payload: {name},
});

export const setRepos = payload => ({
  type: SET_REPOS,
  payload: {repos: payload.repos, totalCount: payload.totalCount},
});

export const fetchRepos = (page = 1, perPage = 5) => async (dispatch, getState) => {
  try {
    const response = await octokit.request('/search/repositories', {
      q: `user:${getState().username}`,
      per_page: perPage,
      page: page,
      sort: 'stars',
      direction: 'desc'
    });
    console.log(response);
    dispatch(setRepos({
      totalCount: response.data.total_count,
      repos: response.data.items,
    }));
  } catch (e) {
    console.error(e);
  }

};
