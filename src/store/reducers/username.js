import { SET_USERNAME } from "../actions";
const initialState = 'allegro';

const username = (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_USERNAME: {
      return payload.name;
    }
    default: {
      return state;
    }
  }
};

export default username;
