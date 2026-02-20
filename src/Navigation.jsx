import '/src/dashboards/admin/SideBar.css'
import {Link} from 'react-router-dom'   

function Navigation({NavIcon, NavName}){
    return(
        <div className="sidebar-content">
            <div>{NavIcon}</div>
            <Link >{NavName}</Link>
        </div>
    )
}

export default Navigation;
