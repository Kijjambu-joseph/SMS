import './ClassSection.css'

function ClassRegForm({onClose}){
    const handleSubmit = (e) => {}


    return(
        <div className="classReg">
            <form onSubmit={handleSubmit} className="classRegForm">
                <h1>Add Class</h1>
                <div className="class-container">
                    <div className="class-content">
                        <label htmlFor="C-level">Class Level</label>
                        <input type="text" id="C-level" name="level" placeholder='Class Level' required/>
                    </div>

                    <div className="class-content">
                        <label htmlFor="C-stream">Class Name/Stream</label>
                        <input type="text" id="C-stream" name="className" placeholder='Stream'/>
                    </div> 
                </div>


                <div className="class-container">
                    <div className="class-content">
                        <label htmlFor="C-teacher">Class Teacher</label>
                        <input type="text" id="C-teacher" name="teacher" placeholder='Class Teacher' required/>
                    </div>

                    <div className="class-content">
                        <label htmlFor="room">Room No.</label>
                        <input type="text" id="room" name="roomNo" placeholder='Room No.' />
                    </div>
                </div>


                <div className="class-container">
                    <div className="class-content">
                        <label htmlFor="stream">Stream/Section</label>
                        <input type="text" id="stream" name="className" placeholder='Stream/Section'/>
                    </div>

                    <div className="class-content">
                        <label htmlFor="capacity">Capacity</label>
                        <input type="text" id="capacity" name="capacity" placeholder='Capacity' />
                    </div>
                </div>


                <div className="class-container">
                    <div className="class-content">
                        <button className='btn1'>Add Timetable</button>
                    </div>

                    <div className="class-content">
                        <button className='btn2' onClick={onClose}>Close Form</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ClassRegForm;