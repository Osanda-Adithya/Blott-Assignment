import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface InitialType {
  firstname: string;
  lastname: string;
}

const initialState: InitialType = {
  firstname: '',
  lastname: '',
};

const loginSlice = createSlice({
  name: 'login',
  initialState: initialState,
  reducers: {
    setCredential(state, {payload}: PayloadAction<InitialType>) {
      state.firstname = payload.firstname;
      state.lastname = payload.lastname;
    },
  },
});

export const {setCredential} = loginSlice.actions;
export default loginSlice.reducer;
