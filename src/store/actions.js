import {Octokit} from "@octokit/rest";
import history from "../history";
import {ERROR_TOO_FAST, ERROR_UNKNOWN, ERROR_USER_NOT_FOUND, ITEMS_PER_API_PAGE} from "../constants";
import {clamp} from "lodash";

export const TOGGLE_THEME = 'TOGGLE_THEME';
export const SET_USERNAME = 'SET_USERNAME';
export const SET_REPOS = 'SET_REPOS';
export const REQUEST_REPOS = 'REQUEST_REPOS';
export const RECEIVE_REPOS = 'RECEIVE_REPOS';
export const RECEIVE_REPOS_ERROR = 'RECEIVE_REPOS_ERROR';
export const SET_PAGE = 'SET_PAGE';

const octokit = new Octokit();

export const toggleTheme = () => ({
  type: TOGGLE_THEME,
});

export const setUsername = username => ({
  type: SET_USERNAME,
  payload: {username},
});

export const requestRepos = () => ({
  type: REQUEST_REPOS,
  payload: null
});

export const receiveRepos = (items, totalCount, page, apiPage) => ({
  type: RECEIVE_REPOS,
  payload : {
    items,
    totalCount,
    currentPage: page,
    apiPage: apiPage
  },
});

export const receiveReposError = (error) => ({
  type: RECEIVE_REPOS_ERROR,
  payload : {
    error
  },
});

const setPage = (page) => ({
  type: SET_PAGE,
  payload : {
    currentPage: page
  }
});

export const fetchPage = (username, page) => async (dispatch, getState) => {
  if(!username) {
    return dispatch(setUsername(''));
  }

  // if username has changed, change username and invalidate the cache
  if(getState().repos.username !== username) {
    dispatch(setUsername(username));
  }

  if(page < 1) {
    return history.replace(`/${getState().repos.username}/1`);
  }

  if(!isFetchNeeded(getState(), page)) {
    return dispatch(setPage(page));
  }

  //else fetch next page of 30 repositories
  dispatch(requestRepos());
  try {
    const pageNeeded = Math.ceil(page * getState().repos.itemsPerPage / ITEMS_PER_API_PAGE);
    const response = await octokit.request('/search/repositories', {
      q: `user:${username}`,
      per_page: ITEMS_PER_API_PAGE,
      page: pageNeeded,
      sort: 'stars'
    });

    //if page number is too big, redirect back to 1st
    if(page * 5 - response.data.total_count > 5) {
      return history.replace(`/${getState().repos.username}/1`);
    }

    dispatch(receiveRepos(response.data.items, response.data.total_count, page, pageNeeded));
  } catch (e) {
    if(e.status === 422 && e.errors && e.errors.some(error => error.field === 'q' && error.code === 'invalid')) {
      dispatch(receiveReposError(ERROR_USER_NOT_FOUND));
    } else if(e.status === 403) {
      dispatch(receiveReposError(ERROR_TOO_FAST));
    } else {
      dispatch(receiveReposError(ERROR_UNKNOWN));
    }

  }

};

function isFetchNeeded({repos: {items, totalCount, itemsPerPage}}, page) {
  const itemsNeeded = clamp(totalCount - (page - 1) * itemsPerPage, itemsPerPage);
  return !totalCount || Object.keys(items.slice((page - 1) * itemsPerPage, page * itemsPerPage)).length !== itemsNeeded;
}

