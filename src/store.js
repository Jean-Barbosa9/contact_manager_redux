import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const REDUX__DEVTOOLS__EXTENSION =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const initialState = {},
  middleware = [thunk],
  store =
    window.location.port >= 3000 &&
    window.navigator.userAgent.indexOf("Chrome") >= 0
      ? createStore(
          rootReducer,
          initialState,
          compose(
            applyMiddleware(...middleware),
            REDUX__DEVTOOLS__EXTENSION
          )
        )
      : createStore(
          rootReducer,
          initialState,
          compose(applyMiddleware(...middleware))
        );

export default store;
