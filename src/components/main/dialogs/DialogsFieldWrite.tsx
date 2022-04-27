import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/Redux";
import { addNewMessage } from "../../../store/DialogsSlice";
import MainClassName from "./Dialogs.module.scss"


function DialogsFieldWrite(props: {thisState: number}) {

  
  const dispatch = useAppDispatch()
  const [newMessage, setNewMessage] = useState<string>('')

  

  const writeMessage = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setNewMessage(event.target.value)
  }

  const getKeyPress = (event: React.KeyboardEvent<HTMLTextAreaElement>): void=> {
    event.key.charCodeAt(0) === 69 && addMessage()
  }

  const addMessage = (): void => {
    if (newMessage.trim() !== '') {
      dispatch(addNewMessage({text: newMessage, idUser: props.thisState}))
      setNewMessage('')
    }
  }



  return <>
    <textarea 
      onKeyPress={(e)=> getKeyPress(e)} 
      onChange={writeMessage} 
      value={newMessage} 
      className={MainClassName.fieldWrite} 
      rows={5} 
      placeholder="Введите текст и нажмите ENTER" 
    ></textarea>

    <button onClick={addMessage} >enter</button>
  </>
}

export default DialogsFieldWrite;
