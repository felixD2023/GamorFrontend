import { PayloadAction, createSlice } from "@reduxjs/toolkit";

//images
import AvatarUserJoined1 from "../Images/actor.png";

export interface UserJoinedType {
  image?: string;
}

export interface UsersJoinedList {
  users: UserJoinedType[];
}

const initialState: UsersJoinedList = {
  users: [{}, { image: AvatarUserJoined1 }, { image: AvatarUserJoined1 }],
};

export const usersJoinedSlice = createSlice({
  name: "usersJoined",
  initialState,
  reducers: {
    setUserJoined: (state, action: PayloadAction<UserJoinedType>) => {
      if (!state.users[0].image) {
        state.users[0] = action.payload;
      }
    },
  },
});

export const {setUserJoined} = usersJoinedSlice.actions;

export default usersJoinedSlice.reducer
