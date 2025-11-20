import React from "react";
// import React, { useState } from "react";
// import { Link } from "react-router-dom";

function StudentRegistration(){

    // const [formData, setFormData] = useState({})

    return(
        <div className="Student-reg">
            <form action="Post" className="student-reg-content">
                <fieldset>
                    <legend>Bio-Data</legend>

                    <div className="bio-infor-container">
                        <div className="bio-content">
                            <div className="input-container">
                                <label htmlFor="first-name">First Name</label>
                                <input type="text" id="first-name" required placeholder="First Name"/>
                                <p></p>
                            </div>

                            <div className="input-container">
                                <label htmlFor="last-name">Last Name</label>
                                <input type="text" id="last-name" required placeholder="Last Name"/>
                                <p></p>
                            </div>
                        </div>

                        <div className="bio-content">

                            <div className="input-container">
                                <label htmlFor="other-name">Other name</label>
                                <input type="text" id="other-name"  placeholder="Other Name"/>
                            </div>

                            <div className="input-container">
                                <label htmlFor="gender">Gender</label>
                                <select name="" id="gender" required>
                                    <option value="">--Select--</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                                <p></p>
                            </div>

                        </div>

                        <div className="bio-content">
                            <div className="input-container">
                                <label htmlFor="DOB">Date of Birth</label>
                                <input type="date" id="DOB" required />
                                <p></p>
                            </div>

                            <div className="input-container">
                                <label htmlFor="nin">National Id No. (NIN)</label>
                                <input type="text" id="nin" placeholder="National ID No." minLength={14} maxLength={14}/>
                            </div>
                        </div>

                        <div className="bio-content">
                            <div className="input-container">
                                <label htmlFor="reli">Religion</label>
                                <input type="text" id="reli" required placeholder="Religion"/>
                                <p></p>
                            </div>

                            <div className="input-container">
                                <label htmlFor="nin">Disability (If any)</label>
                                <input type="text" id="nin" placeholder="National ID No." minLength={14} maxLength={14}/>
                            </div>
                        </div>

                    </div>
                </fieldset>

                <fieldset>
                    <legend>Contact-Information</legend>

                    <div className="bio-infor-container">
                        <div className="bio-content">
                            <div className="input-container">
                                <label htmlFor="home">Home Address</label>
                                <input type="text" id="home" required placeholder="Home Address"/>
                                <p></p>
                            </div>

                            <div className="input-container">
                                <label htmlFor="district">District</label>
                                <input type="text" id="district" required placeholder="District"/>
                                <p></p>
                            </div>
                        </div>

                        <div className="bio-content">

                            <div className="input-container">
                                <label htmlFor="county">County</label>
                                <input type="text" id="county" required placeholder="County"/>
                                <p></p>
                            </div>

                            <div className="input-container">
                                <label htmlFor="sub-county">Sub-County</label>
                                <input type="text" id="sub-county" required placeholder="Sub-County"/>
                                <p></p>
                            </div>

                        </div>

                        <div className="bio-content">
                            <div className="input-container">
                                <label htmlFor="parish">Parish</label>
                                <input type="text" id="parish" required placeholder="Parish"/>
                                <p></p>
                            </div>

                            <div className="input-container">
                                <label htmlFor="village">Village</label>
                                <input type="text" id="county" required placeholder="Village"/>
                                <p></p>
                            </div>
                        </div>

                        <div className="bio-content">
                            <div className="input-container">
                                <label htmlFor="phone">Phone No.</label>
                                <input type="text" id="reli" required placeholder="Phone No."/>
                                <p></p>
                            </div>

                            <div className="input-container">
                                <label htmlFor="stdemail">Email (If any)</label>
                                <input type="email" id="stdemail" placeholder="Email" required/>
                                <p></p>
                            </div>
                        </div>

                    </div>
                </fieldset>


                <fieldset>
                    <legend>Parent/Gardian Information</legend>

                    <div className="bio-infor-container">
                        <div className="bio-content">
                            <div className="input-container">
                                <label htmlFor="parent-name">Parent's Name</label>
                                <input type="text" id="parent-name" required placeholder="First Name"/>
                                <p></p>
                            </div>

                            <div className="input-container">
                                <label htmlFor="relationship">Relationship</label>
                                <select name="" id="gender" required>
                                    <option value="">--Select--</option>
                                    <option value="father">Father</option>
                                    <option value="mother">Mother</option>
                                    <option value="gardian">Gardian</option>
                                </select>
                                <p></p>
                            </div>
                        </div>

                        <div className="bio-content">

                            <div className="input-container">
                                <label htmlFor="other-name">Phone No.</label>
                                <input type="text" id="other-name" required placeholder="Phone No."/>
                                <p></p>
                            </div>

                            <div className="input-container">
                                <label htmlFor="parentemail">Email</label>
                                <input type="email" id="parentemail"  placeholder="Email"/>
                            </div>

                        </div>

                        <div className="bio-content">
                            <div className="input-container">
                                <label htmlFor="occupation">Occupation</label>
                                <input type="text" id="occupation" required placeholder="Occupation"/>
                                <p></p>
                            </div>

                            <div className="input-container">
                                <label htmlFor="address">Address</label>
                                <input type="text" id="address" required placeholder="Address" />
                                <p></p>
                            </div>
                        </div>

                    </div>
                </fieldset>

                <fieldset>
                    <legend>Academic Iinformation</legend>

                    <div className="bio-infor-container">
                        <div className="bio-content">
                            <div className="input-container">
                                <label htmlFor="ad-date">Admission Date</label>
                                <input type="date" id="ad-date" required />
                                <p></p>
                            </div>

                            <div className="input-container">
                                <label htmlFor="class">Class</label>
                                <select name="" id="class" required>
                                    <option value="">--Select--</option>
                                    <option value="s.1">Senior one</option>
                                    <option value="s.2">Senior two</option>
                                    <option value="s.3">Senior three</option>
                                    <option value="s.4">Senior four</option>
                                </select>
                                <p></p>
                            </div>
                        </div>

                        <div className="bio-content">

                            <div className="input-container">
                                <label htmlFor="Stream">Stream</label>
                                <input type="text" id="Stream" required placeholder="Stream"/>
                                <p></p>
                            </div>

                            <div className="input-container">
                                <label htmlFor="category">Student Category</label>
                                <select name="" id="categorys" required>
                                    <option value="">--Select--</option>
                                    <option value="day">Day</option>
                                    <option value="boarding">Boarding</option>
                                </select>
                                <p></p>
                            </div>

                        </div>

                        <div className="bio-content">
                            <div className="input-container">
                                <label htmlFor="previous-school">Previous School</label>
                                <input type="text" id="previous-school" required placeholder="Previous School"/>
                                <p></p>
                            </div>

                            <div className="input-container">
                                <label htmlFor="house">House</label>
                                <input type="text" id="house" required placeholder="House" />
                                <p></p>
                            </div>
                        </div>

                    </div>
                </fieldset>

                <fieldset>
                    <legend>Attachments</legend>
                    <div className="bio-infor-container">
                        <div className="bio-content">
                            
                            <div className="input-container">
                                <label htmlFor="passport">Passport photo</label>
                                <input type="file" accept="image/*" id="passport" required  />
                                <p></p>
                            </div>

                            <div className="input-container">
                                <label htmlFor="Birth-cert">Birth Certificate</label>
                                <input type="file" accept=".pdf" id="Birth-cert" required  />
                                <p></p>
                            </div>

                        </div>

                    </div>
                </fieldset>

                <button className="bg-blue-500 px-4 w-50 h-10 text-white">Register Student</button>
            </form>
        </div>
    );
}

export default  StudentRegistration