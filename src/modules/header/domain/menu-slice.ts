import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';

const initialState = {
  path: '/',
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setPath: (state, action: PayloadAction<string>) => {
      state.path = action.payload;
    },
  },
});

export const { setPath } = menuSlice.actions;

export const selectPath = (state: RootState) => state.menu.path;

export const menuReducer = menuSlice.reducer;
