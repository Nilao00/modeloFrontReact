import rootReducers from "./CombineRedux";

import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "tasks",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducers);
const store = createStore(persistedReducer);
const persistor = persistStore(store);
export { store, persistor };
