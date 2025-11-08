import React from "react";

function OverViewCards(){
    return(
        <div className="overCards">
            <div className="Card">
                <i class="fa-solid fa-users" style={{border:"2px solid white", borderRadius:"50%",width:"50px", height: "50px", fontSize:"25px", display:"grid", placeItems:"center"}}></i>
                <h1>120</h1>
                <p>Users</p>
            </div>

            <div className="Card">
                <i class="fa-solid fa-person-chalkboard" style={{border:"2px solid white", borderRadius:"50%",width:"50px", height: "50px", fontSize:"25px", display:"grid", placeItems:"center"}}></i>
                <h1>120</h1>
                <p>Users</p>
            </div>

            <div className="Card">
                <i class="fa-solid fa-graduation-cap" style={{border:"2px solid white", borderRadius:"50%",width:"50px", height: "50px", fontSize:"25px", display:"grid", placeItems:"center"}}></i>
                <h1>120</h1>
                <p>Users</p>
            </div>

            <div className="Card">
                <i class="fa-solid fa-font-awesome" style={{border:"2px solid white", borderRadius:"50%",width:"50px", height: "50px", fontSize:"25px", display:"grid", placeItems:"center"}}></i>
                <h1>120</h1>
                <p>Users</p>
            </div>

            <div className="Card">
                <i class="fa-solid fa-comment" style={{border:"2px solid white", borderRadius:"50%",width:"50px", height: "50px", fontSize:"25px", display:"grid", placeItems:"center"}}></i>
                <h1>120</h1>
                <p>Users</p>
            </div>
        </div>
    )
}

export default OverViewCards;