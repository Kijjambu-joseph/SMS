import React from "react";  

function Header(){
    return (
        <header style={{backgroundColor:"#000080",width:"100%",height:"60px",display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"10px",borderRadius:"5px",marginRight:"10px",padding:"20px"}}>
            <h1 style={{color:"white"}}>SMS</h1>
            <img src="" alt="" style={{ width:"40px",height:"40px",backgroundColor:"white",borderRadius:"50%"}} />
        </header>
    )
}
export default Header;