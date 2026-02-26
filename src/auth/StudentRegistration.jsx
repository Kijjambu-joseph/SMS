import React, { useState } from "react";
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
import './StudentRegistration.css'

function StudentRegistration({onClose}){

    const[regData, setRegData] = useState({
        firstname:'',
        lastname:'',
        othername:'',
        gender:'',
        dob:'',
        nin:'',
        religion:'',
        disability:'',
        district:'',
        county:'',
        subCounty:'',
        parish:'',
        village:'',
        phone:'',
        email:'',
        parentName:'',
        relationship:'',
        otherPhone:'',
        parentEmail:'',
        occupation:'',
        address:'',
        admissionDate:'',
        class:'',
        stream:'',
        category:'',
        previousSchool:'',
        house:'',   
    })

    const [file, setFile] = useState({
        passport:null,
        birthCertificate:null
    });

    const handleFileChange = (e) => {
            console.log(file);
            setFile(prev => ({
                ...prev,
                [e.target.name]: e.target.files[0]
            }));
    };

    const handleChange = (e) => {
         console.log(regData);
         const { name, value } = e.target;

        setRegData(prev => ({
        ...prev,
        [name]: value
        }));
  };

    return(
        <div className="Student-reg">
            <form action="Post" className="student-reg-content">
                <fieldset>
                    <legend>Bio-Data</legend>

                    <div className="bio-infor-container">
                        <div className="bio-content">
                            <div className="input-container">
                                <label htmlFor="first-name">Surname</label>

                                <input type="text" id="first-name" required placeholder="First Name"
                                
                                    name="firstname"
                                    value={regData.firstname}
                                    onChange={handleChange}
                                />
                                <p></p>
                            </div>

                            <div className="input-container">
                                <label htmlFor="last-name">Given Name</label>
                                <input type="text" id="last-name" required placeholder="Last Name"
                                    name="lastname"
                                    value={regData.lastname}
                                    onChange={handleChange}
                                
                                />
                                <p></p>
                            </div>
                        </div>

                        <div className="bio-content">

                            <div className="input-container">
                                <label htmlFor="other-name">Other name</label>
                                <input type="text" id="other-name"  placeholder="Other Name"
                                    name="othername"
                                    value={regData.othername}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="input-container">
                                <label htmlFor="gender">Gender</label>
                                <select id="gender" required 
                                    name="gender"
                                    value={regData.gender}
                                    onChange={handleChange}
                                
                                >
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
                                <input type="date" id="DOB" required 
                                    name="dob"
                                    value={regData.dob}
                                    onChange={handleChange}
                                />
                                <p></p>
                            </div>

                            <div className="input-container">
                                <label htmlFor="nin">National Id No. (NIN)</label>
                                <input type="text" id="nin" placeholder="National ID No." minLength={14} maxLength={14}
                                    name="nin"
                                    value={regData.nin}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="bio-content">
                            <div className="input-container">
                                <label htmlFor="reli">Religion</label>
                                <input type="text" id="reli" required placeholder="Religion"
                                    name="religion"
                                    value={regData.religion}
                                    onChange={handleChange}
                                />
                                <p></p>
                            </div>

                            <div className="input-container">
                                <label htmlFor="nin">Disability (If any)</label>
                                <input type="text" id="nin" placeholder="National ID No." minLength={14} maxLength={14}
                                    name="disability"
                                    value={regData.disability}
                                    onChange={handleChange}
                                />
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
                                <input type="text" id="district" required placeholder="District"
                                    name="district"
                                    value={regData.district}
                                    onChange={handleChange}
                                />
                                <p></p>
                            </div>
                        </div>

                        <div className="bio-content">

                            <div className="input-container">
                                <label htmlFor="county">County</label>
                                <input type="text" id="county" required placeholder="County"
                                    name="county"
                                    value={regData.county}
                                    onChange={handleChange}
                                />
                                <p></p>
                            </div>

                            <div className="input-container">
                                <label htmlFor="sub-county">Sub-County</label>
                                <input type="text" id="sub-county" required placeholder="Sub-County"
                                    name="sub-county"
                                    value={regData.subCounty}
                                    onChange={handleChange}
                                />
                                <p></p>
                            </div>

                        </div>

                        <div className="bio-content">
                            <div className="input-container">
                                <label htmlFor="parish">Parish</label>
                                <input type="text" id="parish" required placeholder="Parish"
                                    name="parish"
                                    value={regData.parish}
                                    onChange={handleChange}
                                />
                                <p></p>
                            </div>

                            <div className="input-container">
                                <label htmlFor="village">Village</label>
                                <input type="text" id="village" required placeholder="Village"
                                    name="village"
                                    value={regData.village}
                                    onChange={handleChange}
                                />
                                <p></p>
                            </div>
                        </div>

                        <div className="bio-content">
                            <div className="input-container">
                                <label htmlFor="phone">Phone No.</label>
                                <input type="text" id="phone" required placeholder="Phone No."
                                    name="phone"
                                    value={regData.phone}
                                    onChange={handleChange}
                                />
                                <p></p>
                            </div>

                            <div className="input-container">
                                <label htmlFor="stdemail">Email (If any)</label>
                                <input type="email" id="stdemail" placeholder="Email" required
                                    name="email"
                                    value={regData.email}
                                    onChange={handleChange}
                                />
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
                                <input type="text" id="parent-name" required placeholder="First Name"
                                    name="parentName"
                                    value={regData.parentName}
                                    onChange={handleChange}
                                />
                                <p></p>
                            </div>

                            <div className="input-container">
                                <label htmlFor="relationship">Relationship</label>
                                <select  id="relationship" required 
                                    name="relationship"
                                    value={regData.relationship}
                                    onChange={handleChange}
                                >
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
                                <input type="text" id="other-name" required placeholder="Phone No."
                                    name="otherPhone"
                                    value={regData.otherPhone}
                                    onChange={handleChange}
                                />
                                <p></p>
                            </div>

                            <div className="input-container">
                                <label htmlFor="parentemail">Email</label>
                                <input type="email" id="parentemail"  placeholder="Email"
                                    name="parentEmail"
                                    value={regData.parentEmail}
                                    onChange={handleChange}
                                />
                            </div>

                        </div>

                        <div className="bio-content">
                            <div className="input-container">
                                <label htmlFor="occupation">Occupation</label>
                                <input type="text" id="occupation" required placeholder="Occupation"
                                    name="occupation"
                                    value={regData.occupation}
                                    onChange={handleChange}
                                />
                                <p></p>
                            </div>

                            <div className="input-container">
                                <label htmlFor="address">Address</label>
                                <input type="text" id="address" required placeholder="Address"
                                    name="address"
                                    value={regData.address}
                                    onChange={handleChange}
                                />
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
                                <input type="date" id="ad-date" required 
                                    name="admissionDate"
                                    value={regData.admissionDate}
                                    onChange={handleChange}
                                />
                                <p></p>
                            </div>

                            <div className="input-container">
                                <label htmlFor="class">Class</label>
                                <select  id="class" required
                                    name="class"
                                    value={regData.class}
                                    onChange={handleChange}
                                >
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
                                <input type="text" id="Stream" required placeholder="Stream"
                                    name="stream"
                                    value={regData.stream}
                                    onChange={handleChange}
                                />
                                <p></p>
                            </div>

                            <div className="input-container">
                                <label htmlFor="category">Student Category</label>
                                <select  id="categorys" required 
                                    name="category"
                                    value={regData.category}
                                    onChange={handleChange}
                                >
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
                                <input type="text" id="previous-school" required placeholder="Previous School"
                                    name="previousSchool"
                                    value={regData.previousSchool}
                                    onChange={handleChange}
                                />
                                <p></p>
                            </div>

                            <div className="input-container">
                                <label htmlFor="house">House</label>
                                <input type="text" id="house" required placeholder="House"
                                    name="house"
                                    value={regData.house}
                                    onChange={handleChange}
                                />
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
                                <input type="file" accept="image/*" id="passport" required  
                                    name="passport"
                                    value={regData.passport}
                                    onChange={handleFileChange}
                                />
                                <p></p>
                            </div>

                            <div className="input-container">
                                <label htmlFor="Birth-cert">Birth Certificate</label>
                                <input type="file" accept=".pdf" id="Birth-cert" required  
                                    name="birthCertificate"
                                    value={regData.birthCertificate}
                                    onChange={handleFileChange}
                                />
                                <p></p>
                            </div>

                        </div>

                    </div>
                </fieldset>

                <div className=" w-100/100 flex items-center  gap-2">
                    <button className="btn1">Register Student</button>
                    <button className="btn2" onClick={onClose}>Close Form</button>
                </div>
            </form>
        </div>
    );
}

export default  StudentRegistration