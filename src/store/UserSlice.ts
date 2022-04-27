import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchUser } from "./reducers/ActionUser";
// import { fetchUser } from "./reducers/ActionUserr";



export interface User {
    username: string;
    email: string;
    password: string;
    phone_number: string;
    avatar: string;
}


export interface initialState {
    user: User;
    isLoading: boolean;
}


const initialState: initialState = {
    user: {
        username: 'Gregpry',
        email: 'Gregpry@mail.ru',
        password: 'paverg_e',
        phone_number: 'programming',
        avatar: 'https://robohash.org/THJ.png?set=set2&size=150x150',
    },
    isLoading: true,
}


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        actionUser (state, action ) {
            state.user.username = action.payload.username;
            state.user.email = action.payload.email;
            state.user.password = action.payload.password;
            state.user.phone_number = action.payload.phone_number;
            state.user.avatar = action.payload.avatar;
        }
    },
    extraReducers: {
        [fetchUser.fulfilled.type]: (state, action: PayloadAction<User>) => {
            // console.log('action.payload.avatar ', action.payload)
            state.user.username = action.payload.username;
            state.user.email = action.payload.email;
            state.user.password = action.payload.password;
            state.user.phone_number = action.payload.phone_number;
            state.user.avatar = action.payload.avatar;
        },
        [fetchUser.pending.type]: (state) => {
            state.isLoading = true
        },
        [fetchUser.rejected.type]: (state, action) => console.log('error')
    }
})


export const { actionUser } = userSlice.actions
export default userSlice.reducer