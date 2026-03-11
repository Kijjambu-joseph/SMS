import '/src/dashboards/admin/marksSection/MarksSection.css'
import MarksTable from '/src/dashboards/admin/marksSection/MarksTable.jsx';

function MarksBody(){
    return(
        <div className="marks-content w-[100%] h-auto rounded-sm" >
            <h1>Students' Marks</h1>
            <form className='marks-filter'>
                <div className='filter-set-container'>
                    
                    <div className='filter-set'>
                        <label htmlFor="studentName">Student Name</label>
                        <input type="text" placeholder="Student-Name"/>
                    </div>

                    <div className='filter-set'>
                        <label htmlFor="studentId">Student ID</label>
                        <input type="text" placeholder="Student-ID"/>
                    </div>
                </div>

                <div className='filter-set-container'>
                    <div className='filter-set'>
                        <label htmlFor="studentName">Class</label>
                        <select name="studentName" id="studentName">
                            <option value="">Select Student</option>
                            <option value="s1">S1</option>
                            <option value="s2">S2</option>
                            <option value="s3">S3</option>
                            <option value="s4">S4</option>
                            <option value="s5">S5</option>
                            <option value="s6">S6</option>
                        </select>
                    </div>

                    
                    <div className='filter-set'>
                        <label htmlFor="studentName">Term</label>
                        <select name="studentName" id="studentName">
                            <option value="">Select Term</option>
                            <option value="s1">Term 1</option>
                            <option value="s2">Term 2</option>
                            <option value="s3">Term 3</option>
                        </select>
                    </div> 

                    <div className='filter-set'>
                        <label htmlFor="studentName">Gender</label>
                        <select name="studentName" id="studentName">
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>

                    <div className="filter-set">
                        <button>Apply Filter</button>
                    </div>
                </div>


                
            </form>
            <div>
                <MarksTable/>
            </div>
        </div>
    );
}

export default MarksBody;