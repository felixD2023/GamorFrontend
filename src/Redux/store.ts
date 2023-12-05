import { configureStore } from "@reduxjs/toolkit";
import themeReducer from './themeSlice'
import usersJoinedReducer from './usersJoinedSlice'
import platformsReducer from './platformsSlice'
import categoriesReducer from './categoriesSlice'
import gamesReducer from './gamesSlice'
import loggedUserReducer from './loggedUserSlice'

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        usersJoined:usersJoinedReducer,
        platforms:platformsReducer,
        categories:categoriesReducer,
        games:gamesReducer,
        loggedUser:loggedUserReducer,
    },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch


