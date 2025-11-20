import React from "react";

function Banner(){
    return(
        <div className="Bannerview">
            <div style={{width: "100%", height:"250px", padding:"60px", borderRadius:"10px", marginTop:"20px", marginRight: "20px", backgroundColor: "#000080d6"}}>
            <h1 style={{color: "white"}}>Hello, Jose. Ready for Today's Learning?</h1>
            <h2 style={{color: "white"}}>Your Future is Loading......</h2>
            <button
                style={{width:"auto", padding:"10px", marginTop: "10px", fontSize:"1em", color:"white", borderRadius:"10px", border:"none", backgroundColor:"#010175ff"}}
            >Check Today's Classes</button>
        </div>
        </div>
    )
}

export default Banner;