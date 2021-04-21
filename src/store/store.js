import {applyMiddleware, createStore, compose} from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";

// export default createStore(rootReducer, applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
));

// export default createStore(rootReducer, applyMiddleware(thunk));
