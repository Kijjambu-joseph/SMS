import '/src/SideBar.css'
import {NavLink} from 'react-router-dom'   

function Navigation({NavIcon, NavName, to}){
    return(
        <div className="sidebar-content">
            <div>{NavIcon}</div>
            <NavLink to={to} end={to === "/admin"} className={({ isActive}) => isActive ? "dashboard-link" : "inactive"}>{NavName}</NavLink>
        </div>
    )
}

export default Navigation;
