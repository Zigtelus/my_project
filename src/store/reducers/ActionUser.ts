import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "../UserSlice";


export const fetchUser = createAsyncThunk(
    'user/fetchUser',
    async (_, thunkAPI) => {
        try {
            const res = await axios.get<User>('https://random-data-api.com/api/users/random_user')
            return res.data
        } catch (e) {
            console.log('error')
        }
        
    }
)