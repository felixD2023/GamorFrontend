import { configureStore } from "@reduxjs/toolkit";
import themeReducer from './themeSlice'
import usersJoinedReducer from './usersJoinedSlice'
import platformsReducer from './platformsSlice'
import categoriesReducer from './categoriesSlice'

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        usersJoined:usersJoinedReducer,
        platforms:platformsReducer,
        categories:categoriesReducer,
    },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch


