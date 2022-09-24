import { createSlice } from "@reduxjs/toolkit";

const initialState =[
    {id:'1', name:'tamanna akter'},
    {id:'2', name:'abdul al galib'},
    {id:'3', name:'tabasum akter'},
]
const usersSlice = createSlice({
    name : 'users',
    initialState,
    reducers:{}
})

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer