import {configureStore} from '@reduxjs/toolkit'
import {sliceOrderReducer} from "./slices/sliceOrder";

export const store = configureStore({
    reducer: {
        order: sliceOrderReducer
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
