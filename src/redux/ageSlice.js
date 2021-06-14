import {createSlice} from '@reduxjs/toolkit';

export const ageSlice = createSlice({
  name: 'age',
  initialState: {
    value: '0',
  },
  reducers: {
    addStep: (state, action) => {
      state.value = parseInt(action.payload ? action.payload : 0).toString();
    },
  },
});

// ACTIONS export
export const {addStep} = ageSlice.actions;
export default ageSlice.reducer;
