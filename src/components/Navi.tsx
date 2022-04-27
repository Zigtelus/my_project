import { NavLink, useLocation } from "react-router-dom";
import MainClassName from "../App.module.scss"
import { mainRouters } from "../routers";

function Navi() {

    const isLocation = useLocation()

    const checkLink = (link: any): any=> {
      if (link === isLocation.pathname) return MainClassName.linkActiv
      
    }

    return <nav>
      <ul>
        <li><NavLink className={checkLink(`${mainRouters.Home}`)} to={`${mainRouters.Home}`} >Home</NavLink></li>
        <li><NavLink className={checkLink(`${mainRouters.Dialogs}`)} to={`${mainRouters.Dialogs}`} >Dialogs</NavLink></li>
        <li><NavLink className={checkLink(`${mainRouters.Profile}`)} to={`${mainRouters.Profile}`} >Profile</NavLink></li>
      </ul>
    </nav>
  }
  
  export default Navi;
  