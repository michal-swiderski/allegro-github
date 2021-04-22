import {Octokit} from "@octokit/rest";
import history from "../history";
import {ERROR_TOO_FAST, ERROR_UNKNOWN, ERROR_USER_NOT_FOUND} from "../constants";

export const TOGGLE_THEME = 'TOGGLE_THEME';
export const SET_USERNAME = 'SET_USERNAME';
export const SET_REPOS = 'SET_REPOS';
export const REQUEST_REPOS = 'REQUEST_REPOS';
export const RECEIVE_REPOS = 'RECEIVE_REPOS';
export const RECEIVE_REPOS_ERROR = 'RECEIVE_REPOS_ERROR';

const octokit = new Octokit();

export const toggleTheme = () => ({
  type: TOGGLE_THEME,
});

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

export const receiveReposError = (error) => ({
  type: RECEIVE_REPOS_ERROR,
  payload : {
    error
  },
});

export const changePage = page => async (dispatch, getState) => {
  if(page < 1) {
    return history.replace(`/${getState().username}/1`);
  }
  dispatch(requestRepos());
  try {
    const response = await octokit.request('/search/repositories', {
      q: `user:${getState().username}`,
      per_page: 5,
      page: page,
      sort: 'stars',
      direction: 'desc'
    });

    if(page * 5 - response.data.total_count > 5) {
      return history.replace(`/${getState().username}/1`);
    }

    dispatch(receiveRepos(response.data.items, response.data.total_count, page));
  } catch (e) {
    console.log(e);
    if(e.status === 422 && e.errors.some(error => error.field === 'q' && error.code === 'invalid')) {
      dispatch(receiveReposError(ERROR_USER_NOT_FOUND));
    } else if(e.status === 403) {
      dispatch(receiveReposError(ERROR_TOO_FAST));
    } else {
      receiveReposError(ERROR_UNKNOWN);
    }

  }

};

