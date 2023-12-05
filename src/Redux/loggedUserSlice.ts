import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface UserType {
  username: string;
  password: string;
}

export interface UserState {
  loggedUser?: UserType;
  registeredUser: UserType;
}

const initialState: UserState = {
  registeredUser: { username: "gamer", password: "gamer" },
};

const loggedUserSlice = createSlice({
  name: "loggedUser",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserType>) => {
      state.loggedUser = action.payload;
    },
    logout: (state) => {
      state.loggedUser = undefined;
    },
  },
});

export const { login, logout } = loggedUserSlice.actions;

export default loggedUserSlice.reducer;
