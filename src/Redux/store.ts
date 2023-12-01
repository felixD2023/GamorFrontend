import { configureStore } from "@reduxjs/toolkit";
import themeReducer from './themeSlice'
import usersJoinedReducer from './usersjoinedSlice'



export const store = configureStore({
    reducer: {
        theme: themeReducer,
        usersJoined:usersJoinedReducer,
    },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch


