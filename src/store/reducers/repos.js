import {RECEIVE_REPOS, RECEIVE_REPOS_ERROR, REQUEST_REPOS} from "../actions";

const initialState = {
  error: null,
  isFetching: false,
  totalCount: null,
  currentPage: null,
  itemsPerPage: 5,
  items: []
};

const repos = (state = initialState, {type, payload}) => {
  switch (type) {

    case REQUEST_REPOS: {
      return {
        ...state,
        error: null,
        isFetching: true
      }
    }

    case RECEIVE_REPOS: {
      return {
        ...state,
        error: false,
        isFetching: false,
        totalCount: payload.totalCount,
        currentPage: payload.currentPage,
        items: payload.items
      }
    }

    case RECEIVE_REPOS_ERROR: {
      return {
        ...state,
        error: payload.error,
        isFetching: false
      }
    }

    default: {
      return state;
    }
  }
};

export default repos;
