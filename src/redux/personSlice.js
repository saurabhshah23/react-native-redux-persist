import {createSlice} from '@reduxjs/toolkit';

export const personSlice = createSlice({
  name: 'person',
  initialState: {
    value: '',
  },
  reducers: {
    rename: (state, action) => {
      state.value = action.payload ? action.payload : '';
    },
  },
});

// ACTIONS export
export const {rename} = personSlice.actions;
export default personSlice.reducer;
