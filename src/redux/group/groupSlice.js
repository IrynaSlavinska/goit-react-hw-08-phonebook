import { createSlice } from '@reduxjs/toolkit';
import { groupFilters } from './groupFilters';

const groupSlice = createSlice({
  name: 'group',
  initialState: {
    group: groupFilters.all,
  },
  reducers: {
    setGroupFilters(state, action) {
      state.group = action.payload;
    },
  },
});

export const { setGroupFilters } = groupSlice.actions;
export const sortReducer = groupSlice.reducer;
