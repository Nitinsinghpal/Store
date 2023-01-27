import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";


export const userSlice = createSlice({
    name: 'users',
    initialState : [],
    reducers: {
        getUsers: (state,action) => {
            console.log(action.payload);
           state.data.pop()
           state.data.push(action.payload)
        },
        addUser: (state,action) => {
            console.log("Add",action.payload)
            return [...state,action.payload]

        }
    }
})

export const { getUsers, addUser } = userSlice.actions;
export default userSlice.reducer;