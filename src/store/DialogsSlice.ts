import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { dialogs } from "./reducers/ActionDialogs";





export const dialogsSlice = createSlice({
    name: 'dialogs',
    initialState: dialogs,
    reducers: {
        addNewMessage (state, action) {

            state.find(item => {
                if (item.id === action.payload.idUser) {

                    // вычисляется длинна массива сообщений
                    let lemgthMessages = item.messages.length

                    // нахожу последнее сообщение массива и узнаю там АйДи 
                    // это необходимо так как в случае удаления сообщений, айДи может отличаться от длинны массива больше
                    let idNewMessage = item.messages[lemgthMessages-1].id +1
                    const message = {id: idNewMessage, text: action.payload.text, Iuser: true}
                    item.messages.push(message)
                }
            })
        }
    },
})


export const { addNewMessage } = dialogsSlice.actions
export default dialogsSlice.reducer