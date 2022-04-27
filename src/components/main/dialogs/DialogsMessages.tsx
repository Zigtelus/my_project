import { Messages, typeDialogs } from "../../../store/reducers/ActionDialogs";
import MainClassName from "./Dialogs.module.scss"


interface Props {
  thisDataUser: typeDialogs[];
  thisState: number;
}

function DialogsMessages(props: Props) {
  
  
  const messages = props.thisDataUser.find((item: typeDialogs): Messages | boolean => item.id === props.thisState)?.messages
  const whoseMessage = (item: Messages): string => item.Iuser ? MainClassName.chatItemI : MainClassName.chatItem


  return <div className={MainClassName.containChatContainer}>
  Chat
  <div className={MainClassName.containChat}>
    <div className={MainClassName.chat}>
      {messages && messages.map((item: Messages) => <span className={whoseMessage(item)} key={item.id}>{item.text}</span>)}
    </div>
  </div>
</div>
}

export default DialogsMessages;
