import { SET_DARK_THEME } from "../actions";
const initialState = false;

const darkTheme = (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_DARK_THEME: {
      return payload;
    }
    default: {
      return state;
    }
  }
};

export default darkTheme;
