
import profilePic from '/src/assets/team-2.jpg'
import '/src/Header.css'
import React from "react";


function ResponsiveHeader(){
    return(
        <div className=" responsive-header w-full h-auto flex items-center justify-between bg-amber-500">
            <i className="fa-solid fa-bars"></i>

            <div className="user-wrap flex items-center justify-center gap-5">
                <p className="new-notification">3</p>
                <i className="fa-solid fa-bell"></i>
                <div className="profile">
                    <img src={profilePic} alt="" className="admin-header-dp"  />
                </div>
             </div>
        </div>
    )
}

export default ResponsiveHeader;