import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";

import { appReducer } from "./reducer";

export default createStore(appReducer, applyMiddleware(ReduxThunk));