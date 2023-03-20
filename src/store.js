import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import rootReducer from "../src/redux/reducers/index";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(
  persistConfig,
  rootReducer,
  applyMiddleware(thunk)
);
const store = createStore(persistedReducer, applyMiddleware(thunk));
let persistor = persistStore(store);

export default store;
export { persistor };
