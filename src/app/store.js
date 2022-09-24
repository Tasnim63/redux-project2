import { configureStore } from "@reduxjs/toolkit";
import postsReducers from '../features/posts/postSlice';
import usersreducers from '../features/users/userSlice'
export const store =configureStore({
    reducer:{
        posts:postsReducers,
        users : usersreducers
    },
})