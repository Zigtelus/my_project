import { combineReducers, configureStore } from "@reduxjs/toolkit"
import dialogsReducer from "./DialogsSlice"
import userReducer from "./UserSlice"



const rootReducer = combineReducers({
    userReducer,
    dialogsReducer
})

// const rootDialogs = combineReducers({
//     dialogsReducer
// })

export const setupStore = ()=> configureStore({
    reducer: {
        userReducer,
        dialogsReducer
    }
})

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']