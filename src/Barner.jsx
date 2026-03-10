import '/src/Card.css'


function Barner({userName, wecomingText}){


    return(
        <div className="barner-content w-[99%] h-auto  rounded-sm">
            <h1>Welcome <span>{userName}</span></h1>
            <p>{wecomingText}</p>
        </div>
    )
}

export default Barner;