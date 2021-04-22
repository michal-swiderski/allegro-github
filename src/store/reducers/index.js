import { combineReducers } from "redux";
import username from "./username";
import repos from "./repos";
import darkTheme from "./theme";

export default combineReducers({darkTheme, username, repos});
