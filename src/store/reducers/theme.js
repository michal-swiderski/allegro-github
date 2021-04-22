import { TOGGLE_THEME } from "../actions";
const initialState = false;

const darkTheme = (state = initialState, {type, payload}) => {
  switch (type) {
    case TOGGLE_THEME: {
      return !state;
    }
    default: {
      return state;
    }
  }
};

export default darkTheme;
