import './ClassSection.css'

function ClassRegForm(){
    return(
        <div className="classReg">
            <form onSubmit={console.log("Form submitted")} className="classRegForm">
                <h1>Add Class</h1>
                <div className="class-container">
                    <div className="class-content">
                        <label htmlFor="class">Class Name</label>
                        <input type="text" id="class" name="class" placeholder='Class Name' required/>
                    </div>

                    <div className="class-content">
                        <label htmlFor="stream">Stream</label>
                        <input type="text" id="className" name="className" placeholder='Stream'/>
                    </div> 
                </div>


                <div className="class-container">
                    <div className="class-content">
                        <label htmlFor="className">Class Teacher</label>
                        <input type="text" id="classTeacher" name="className" placeholder='Class Teacher' required/>
                    </div>

                    <div className="class-content">
                        <label htmlFor="stream">Stream/Section</label>
                        <input type="text" id="stream" name="className" placeholder='Stream/Section'/>
                    </div>
                </div>


                <div className="class-container">
                    <div className="class-content">
                        <label htmlFor="room">Room No.</label>
                        <input type="text" id="room" name="roomNo" placeholder='Room No.' />
                    </div>

                    <div className="class-content">
                        <label htmlFor="capacity">Capacity</label>
                        <input type="text" id="capacity" name="capacity" placeholder='Capacity' />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ClassRegForm;