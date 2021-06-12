import {createSlice} from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: state => {
      state.value++;
    },
    decrement: state => {
      state.value--;
    },
    addStep: (state, action) => {
      state.value += action.payload;
    },
  },
});

// ACTIONS export
export const {increment, decrement, addStep} = counterSlice.actions;

// Define a thunk that dispatches those action creators
/**
 * function to add a dynamic value to counter asynchronously.
 * @param {Number} step (OPTIONAL: default value 1)
 *
 * NOTE: setTimeout is used only for demo of asynchronous feature. Any side-effect like API calls can be used here.
 * setTimeout will be delayed and may take longer than specified time when debugger is active. Turning the debug mode off will fix it.
 */
export const addThunk = (step = 1) => async dispatch => {
  setTimeout(() => {
    console.log('SS:: addAsync called...');
    dispatch(addStep(step));
  }, 2000);
};

export default counterSlice.reducer;
