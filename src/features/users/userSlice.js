import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: {}
}

export const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        fetchUsers: (state, action) => {
            state.users = action.payload
        },
        searchUsers: (state, action) => {
            state.users = action.payload
        }
    }
})

export const { fetchUsers, searchUsers, sortUsers } = userSlice.actions;
export default userSlice.reducer;