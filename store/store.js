import {configureStore} from '@reduxjs/toolkit';
import counterSlice from './reducers/counter';
const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});
export default store;
