import { PayloadAction, createSlice } from "@reduxjs/toolkit";

//emojis
import emoji_party from "../Images/emoji_party.png";
import emoji_matches from "../Images/emoji_matches.png";
import emoji_streams from "../Images/emoji_stream.png";

export interface PlatformType {
  name: string;
  isActive: boolean;
  icon: string;
}

export interface PlatformsState {
  platforms: PlatformType[];
}
const initialState: PlatformsState = {
  platforms: [
    { name: "Party", isActive: true, icon: emoji_party },
    { name: "Matches", isActive: false, icon: emoji_matches },
    { name: "Streams", isActive: false, icon: emoji_streams },
  ],
};

export const platformsState = createSlice({
  name: "platforms",
  initialState,
  reducers: {
    setPlatformActive: (state, action: PayloadAction<string>) => {
      const tempPlatforms: PlatformType[] = [];
      state.platforms.map((platform: PlatformType) => {
        if (platform.name === action.payload) {
          tempPlatforms.push({ name: platform.name, isActive: true, icon:platform.icon });
        } else {
          tempPlatforms.push({ name: platform.name, isActive: false, icon:platform.icon });
        }
      });
      state.platforms = tempPlatforms;
    },
  },
});

export const { setPlatformActive } = platformsState.actions;

export default platformsState.reducer;
