import React from "react";

function Header() {
  return (
        <header style={{width: "100%", backgroundColor: "#000080", height: "70px", display:"flex", alignItems:"center", justifyContent:"space-between", padding: "20px 50px"}}>

            <h1 style={{color:"white"}}>SMS</h1>
             <div className="img">
                <img style={{borderRadius: "50%", width: "55px", height: "55px", border:"2px solid #ffffff"}} src="" alt="photo" />
             </div>
        </header>
  );
}

export default Header;