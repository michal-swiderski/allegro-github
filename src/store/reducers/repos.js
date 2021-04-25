import {RECEIVE_REPOS, RECEIVE_REPOS_ERROR, REQUEST_REPOS, SET_PAGE, SET_USERNAME} from "../actions";
import produce from "immer";
import {ITEMS_PER_API_PAGE} from "../../constants";

const initialState = {
  username: '',
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
      return produce(state, draft => {
        draft.error = null;
        draft.isFetching = false;
        draft.totalCount = payload.totalCount;
        draft.currentPage = payload.currentPage;

        // put items in correct places in a sparse array
        payload.items.forEach((item, idx) => {
          draft.items[idx + (payload.apiPage - 1) * ITEMS_PER_API_PAGE] = item;
        });
      });
    }

    case RECEIVE_REPOS_ERROR: {
      return {
        ...state,
        error: payload.error,
        isFetching: false
      }
    }

    case SET_PAGE: {
      return {
        ...state,
        currentPage: payload.currentPage
      }
    }

    case SET_USERNAME: {
      return {
        ...initialState,
        username: payload.username
      }
    }

    default: {
      return state;
    }
  }
};

export default repos;
