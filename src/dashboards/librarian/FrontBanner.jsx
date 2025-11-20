import React from "react";

function FrontBanner(){
    return(
        
        <div className="Bannerdisplay">
            <div style={{width: "90%", height:"250px",marginLeft:"20px", borderRadius:"10px", marginTop:"20px", marginRight: "20px", backgroundColor: "#1111c2d6",textAlign:"center",padding:"60px"}}>
            <h1 style={{color: "white"}}>Welcome Librarian. Manage Your Library Efficiently!</h1>
            <h2 style={{color: "white"}}>Organize, Track, and Serve with Ease.</h2>
            <button
                style={{width:"auto", padding:"10px", marginTop: "10px", fontSize:"1em", color:"white", borderRadius:"10px", border:"none", backgroundColor:"#010175ff"}}
            >Manage Library Resources</button>
        </div>
        </div>
    )
}
export default FrontBanner;