import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { createNanoEvents } from "nanoevents";

import reducers from "./reducers";

export const subscribe = createNanoEvents();

export let store;

const storeMiddleware = () => (next) => (action) => {
  if (typeof action.type === "undefined") {
    return;
  }

  subscribe.emit(action.type, action);

  // Call the next dispatch method in the middleware chain.
  const nextAction = next(action);

  // This will likely be the action itself, unless
  // a middleware further in chain changed it.
  return nextAction;
};

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const makeStore = () => {
  let store = createStore(
    persistedReducer,
    bindMiddleware([thunkMiddleware, storeMiddleware])
  );
  let persistor = persistStore(store);
  return { store, persistor };
};

export default makeStore;
