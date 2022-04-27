import { useState } from "react";
import { useAppSelector } from "../../../hooks/Redux";
import MainClassName from "./Dialogs.module.scss"
import DialogsFieldWrite from "./DialogsFieldWrite";
import DialogsMessages from "./DialogsMessages";
import DialogsUsers from "./DialogsUsers";

function Dialogs() {

  const [isState, setState] = useState<number>(1)

  const dataUser = useAppSelector(state => state.dialogsReducer)




  return <>
    <h1>Dialogs</h1>


    <div className={MainClassName.dialogs}>
      <DialogsUsers thisDataUser={dataUser} thisState={isState} thisSetState={setState}/>

      <DialogsMessages thisDataUser={dataUser} thisState={isState} />

      <DialogsFieldWrite thisState={isState} />
    </div>
  </>
}

export default Dialogs;
