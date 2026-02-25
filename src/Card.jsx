import React from "react";
import './Card.css'

function Card({icon, tittle, value}){
    return(
            <div className="Card-container">
                <div className="icon">{icon}</div>
                <h3>{tittle}</h3>
                <p>{value}</p>
            </div>
    )
}

export default Card;