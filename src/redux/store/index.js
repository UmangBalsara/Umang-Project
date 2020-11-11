import { createStore, applyMiddleware } from "redux";
import studentReducer from "../AddStudent/reducer";

import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";

const loggerMiddleware = createLogger();

const store = createStore(
  studentReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware, loggerMiddleware))
);

export default store;
