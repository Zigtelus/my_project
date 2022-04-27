import { Dispatch, SetStateAction } from "react";
import { typeDialogs } from "../../../store/reducers/ActionDialogs"
import MainClassName from "./Dialogs.module.scss"


interface Props {
  thisDataUser: typeDialogs[];
  thisSetState: Dispatch<SetStateAction<number>>;
  thisState: number;
}

function DialogsUsers(props: Props) {
  const selectChat = (userId: number): void=> {
    props.thisSetState(userId)
}


  return <div className={MainClassName.userContainer}>
    <h2>Users</h2>
    <div className={MainClassName.users}>

      {props.thisDataUser.map((item: typeDialogs)=> {
        return <button 
          className={item.id === props.thisState ? MainClassName.user : MainClassName.userOn} 
          onClick={()=> selectChat(item.id)} 
          key={item.id}
        >{item.name}</button>
      })}
      
    </div>
  </div>
}

export default DialogsUsers;
