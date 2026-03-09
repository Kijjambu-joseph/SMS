import '/src/SideBar.css'
import {NavLink} from 'react-router-dom'   

function Navigation({NavIcon, NavName, to, onOvervie}){


    return(
        <div className="sidebar-content">
            <div>{NavIcon}</div>
            <NavLink onClick={onOvervie} to={to} end={to === "/admin"} className={({ isActive}) => isActive ? "dashboard-link" : "inactive"}>{NavName}</NavLink>
        </div>
    )
}

export default Navigation;
