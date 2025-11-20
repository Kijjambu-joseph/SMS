import React from "react";


function TeacherRegistration(){
    return(
        <div className="teacher-Reg">
            <form action="">
                <fieldset>
                    <legend>Bio-data</legend>

                    <div className="Teachers-infor-container">
                        <div className="Teachers-infor">

                            <div className="Teachers-input-container">
                                <label htmlFor="first-name">First Name</label>
                                <input type="text" id="first-name" required placeholder="First Name"/>
                            </div>
                            <div className="Teachers-input-container">
                                <label htmlFor="last-name">last Name</label>
                                <input type="text" id="last-name" required placeholder="last Name"/>
                            </div>

                        </div> 
{/* 
                        <div className="Teachers-infor">
                            <div className="Teachers-input-container">
                                <label htmlFor="other-name">Other Name</label>
                                <input type="text" id="other-name" required placeholder="other Name"/>
                            </div>
                            <div className="Teachers-input-container">
                                <label htmlFor="gender">Gender</label>
                                <select name="" id="gender">
                                    <option value="">--Select--</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                        </div>  */}
                        
                    </div>
                </fieldset>
            </form>
        </div>
    )
}
export default TeacherRegistration;