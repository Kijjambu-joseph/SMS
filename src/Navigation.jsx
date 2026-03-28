import '/src/SideBar.css'
import {NavLink} from 'react-router-dom'   

function Navigation({NavIcon, NavName, to, onOvervie, end=false}){


    return(
        <div className="sidebar-content">
            <div className='navigation-icon'>{NavIcon}</div>
            <NavLink onClick={onOvervie} to={to} end={end} className={({ isActive}) => isActive ? "dashboard-link" : "inactive"}>{NavName}</NavLink>
        </div>
    )
}

export default Navigation;
