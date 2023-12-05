import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface GameType {
  name: string;
  category?: string;
  platform?: string;
  yearCreation?: number;
  numbersPlayers?: number;
}

export interface GamesState {
  gamesList: GameType[];
  gamesSelected: GameType[];
}

export interface GamesFilterType {
  category?: string;
  platform?: string;
  yearCreation: number;
  numbersPlayers: number;
}

const initialState: GamesState = {
  gamesList: [],
  gamesSelected: [],
};

const gamesSlice = createSlice({
  name: "games",
  initialState,
  reducers: {
    searchGames: (state, action: PayloadAction<GamesFilterType>) => {
      const tempGamesSelected: GameType[] = [];

      state.gamesList.map((game) => {
        if (
          game.category === action.payload.category &&
          game.platform === action.payload.platform &&
          game.numbersPlayers === action.payload.numbersPlayers &&
          game.yearCreation === action.payload.yearCreation
        ) {
          tempGamesSelected.push(game);
        }
      });
      state.gamesSelected = tempGamesSelected;
    },
  },
});

export const { searchGames } = gamesSlice.actions;

export default gamesSlice.reducer;
