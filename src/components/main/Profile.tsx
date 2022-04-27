import { MouseEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/Redux";
import { fetchUser } from "../../store/reducers/ActionUser";
import { actionUser } from "../../store/UserSlice";
import MainClassName from "./Main.module.scss"

function Profile() {

  const dispatch = useAppDispatch()
  const dataUser = useAppSelector(state => state.userReducer)
  console.log(dataUser)
  const user = dataUser.user


  const [isAvatar, addAvatar] = useState(false)
  const btnNext = (e: MouseEvent) => {
    e.preventDefault()
    dispatch(fetchUser())
    addAvatar(true)
    localStorage.setItem('user', JSON.stringify(user))
    alert('данные сохранены в localStorage')
  }


  const btnBack = (e: MouseEvent)=> {
    addAvatar(false)
    e.preventDefault()
    const getLocal = localStorage.getItem('user')
    const user = getLocal && JSON.parse(getLocal)
    dispatch(actionUser(user))
    alert('данные загрузились из localStorage')
  }

  const loading = 'loading...'


  return <>
    <h1>Profile</h1>


    <div className={MainClassName.profile}>

      <div className={MainClassName.picture}>
        <img src={dataUser.isLoading === true ? user.avatar : loading} alt="avatar" />
      </div>

      <form className={MainClassName.form} action="">

        <div className={MainClassName.formItem}>
          <label htmlFor="name">name</label>
          <input id="name" type="text" disabled value={dataUser.isLoading === true ? user.username : loading} />
        </div>

        <div className={MainClassName.formItem}>
          <label htmlFor="email">email</label>
          <input id="email" type="text" value={dataUser.isLoading === true ? user.email : loading} disabled />
        </div>

        <div className={MainClassName.formItem}>
          <label htmlFor="password">password</label>
          <input id="password" type="text" value={user.password} disabled />
        </div>

        <div className={MainClassName.formItem}>
          <label htmlFor="phone_number">Phone number</label>
          <input id="phone_number" type="text" value={user.phone_number} disabled />
        </div>

        <div className={MainClassName.buttonContain}>
          <button onClick={btnNext}>next</button>
          {isAvatar && <button onClick={btnBack}>back</button>}
        </div>

      </form>

    </div>
  </>
}

export default Profile;
