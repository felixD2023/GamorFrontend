import { PayloadAction, createSlice } from "@reduxjs/toolkit";

//images
import Action from "../Images/Categories/ActionGames.jpg";
import Sports from "../Images/Categories/SportsGames.jpg";
import Adventure from "../Images/Categories/AdventureGames.webp";
import Arcade from "../Images/Categories/ArcadeGames.webp";
import Fantasy from "../Images/Categories/FantasyGames.jpg";
import Strategy from "../Images/Categories/StrategyGames.webp";
import Shooter from "../Images/Categories/ShooterGames.jpg";
import AllCategories from '../Images/Categories/AllCategories.png'

export interface CategoryType {
  name: string;
  isActive: boolean;
  image: string;
}

export interface CategoryState {
  categories: CategoryType[];
}

const initialState: CategoryState = {
  categories: [
    { name: "Action Games", isActive: false, image: Action },
    { name: "Sports Games", isActive: false, image: Sports },
    { name: "Adventure Games", isActive: false, image: Adventure },
    { name: "Arcade Games", isActive: false, image: Arcade },
    { name: "Fantasy Games", isActive: false, image: Fantasy },
    { name: "Strategy Games", isActive: false, image: Strategy },
    { name: "Shooter Games", isActive: true, image: Shooter },
    { name: "All Categories", isActive: false, image: AllCategories },
    
  ],
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategoryActive: (state, action: PayloadAction<string>) => {
      const tempCategoriesList: CategoryType[] = [];

      state.categories.map((category: CategoryType) => {
        if (category.name === action.payload) {
          tempCategoriesList.push({ ...category, isActive: true });
        } else {
          tempCategoriesList.push({ ...category, isActive: false });
        }
      });

			state.categories=tempCategoriesList;
    },
  },
});

export const { setCategoryActive } = categoriesSlice.actions;

export default  categoriesSlice.reducer;