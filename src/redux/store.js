// import {configureStore} from '@reduxjs/toolkit';
// import counterReducer from './counterSlice';

// export default configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });

// REDUX-PERSIST TRIAL
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
// REDUX-PERSIST
// import storage from 'redux-persist/lib/storage';
import {combineReducers} from 'redux';
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

// persist config obj
const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  counter: counterReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = configureStore({
//   reducer: persistedReducer,
// });
const store = configureStore({
  reducer: persistedReducer,
  // middleware option needs to be provided for avoiding the error. ref: https://redux-toolkit.js.org/usage/usage-guide#use-with-redux-persist
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
})

export const persistor = persistStore(store);
export default store;