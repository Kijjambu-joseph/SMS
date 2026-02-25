import React from "react";
import profilePic from '/src/assets/team-2.jpg'
import './Header.css'

function Header(){
    return(
        <header className="admin-header w-98/100 h-auto flex items-center justify-between ">

            <div className="admin-header-content1 w-80/100 flex items-center justify-center gap-10 ">

                {/* <h1 className="text-white text-4xl">PSS</h1> */}

                <div className="admin-search-wrapper">
                    <i className="fa-solid fa-search"></i>
                    <input type="text" placeholder="Serch Here" className="admin-header-input"/>
                </div>

            </div>

            <div className="user-wrap flex items-center justify-center gap-5">
                <p className="new-notification">3</p>
                <i className="fa-solid fa-bell"></i>
                <div className="profile">
                    <img src={profilePic} alt="" className="admin-header-dp"  />
                </div>
            </div>
        </header>
    )
}
export default Header;