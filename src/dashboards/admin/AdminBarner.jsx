import { useState } from 'react'
import Barner from '/src/Barner.jsx'

function AdminBarner(){
    const adminData = localStorage.getItem('user')
    const userName = adminData ? JSON.parse(adminData) : null;
    const [name, setName] = useState(userName?.userName || "")
    return(
        <div>
            <Barner userName={name} wecomingText="Academic Session: 2025/2026. Your institution management tools are ready. Access user records, fee modules, and faculty reports below."/>
        </div>
    )
}

export default AdminBarner;