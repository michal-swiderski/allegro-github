import {RECEIVE_REPOS, REQUEST_REPOS} from "../actions";

const initialState = {
  error: false,
  isFetching: false,
  totalCount: 0,
  apiPage: 1,
  currentPage: 1,
  itemsPerPage: 5,
  items: []
};

const repos = (state = initialState, {type, payload}) => {
  switch (type) {

    case REQUEST_REPOS: {
      return {
        ...state,
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

    default: {
      return state;
    }
  }
};

export default repos;
