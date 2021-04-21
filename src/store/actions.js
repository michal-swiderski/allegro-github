import {Octokit} from "@octokit/rest";
import {clamp, range} from "lodash";

export const SET_USERNAME = 'SET_USERNAME';
export const SET_REPOS = 'SET_REPOS';
export const REQUEST_REPOS = 'REQUEST_REPOS';
export const RECEIVE_REPOS = 'RECEIVE_REPOS';
export const RECEIVE_REPOS_ERROR = 'RECEIVE_REPOS_ERROR';
export const SET_PAGE = 'SET_PAGE';

const octokit = new Octokit();

export const setUsername = name => ({
  type: SET_USERNAME,
  payload: {name},
});

export const requestRepos = () => ({
  type: REQUEST_REPOS,
  payload: null
});

export const receiveRepos = (items, totalCount, page) => ({
  type: RECEIVE_REPOS,
  payload : {
    items,
    totalCount,
    currentPage: page
  },
});

export const changePage = page => async (dispatch, getState) => {
  try {
    dispatch(requestRepos());
    const response = await octokit.request('/search/repositories', {
      q: `user:${getState().username}`,
      per_page: 5,
      page: page,
      sort: 'stars',
      direction: 'desc'
    });
    dispatch(receiveRepos(response.data.items, response.data.total_count, page));
  } catch (e) {
    console.error(e);
  }

};

