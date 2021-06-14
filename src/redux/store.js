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
import ageReducer from './ageSlice';
import personReducer from './personSlice';
// REDUX-PERSIST
// import storage from 'redux-persist/lib/storage';
import {combineReducers} from 'redux';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const rootReducer = combineReducers({
  person: personReducer,
  counter: counterReducer,
  age: ageReducer,
});

// persist config obj
// blacklist a store attribute using it's reducer name. Blacklisted attributes will not persist. (I did not find a way to blacklist specific values)
const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
  blacklist: ['age'], //blacklisting a store attribute name, will not persist that store attribute.
};

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
});

export const persistor = persistStore(store);
export default store;
