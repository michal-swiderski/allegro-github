import {SET_REPOS} from "../actions";

const initialState = {
  error: false,
  totalCount: 0,
  repos: []
};

const repos = (state = initialState, {type, payload}) => {
  switch (type) {

    case SET_REPOS: {
      return {
        error: false,
        totalCount: payload.totalCount,
        repos: payload.repos
      };
    }

    default: {
      return state;
    }
  }
};

export default repos;
