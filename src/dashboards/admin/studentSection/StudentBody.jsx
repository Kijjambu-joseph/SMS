import '/src/dashboards/admin/studentSection/StudentBody.css'
import ReactModal from 'react-modal';
import  { useEffect, useState } from 'react';
import axios from 'axios';
import StudentRegistration from '/src/auth/StudentRegistration.jsx'

ReactModal.setAppElement("#root");

const StudentBody = () => {
    const [regFormOpen, setRegFormOpen] = useState(false);
    const [studentRecord, setStudentRecord] = useState([]);
    const [loading, setLoading] = useState(true)

    const studentData = async () =>{
      try{
        setLoading(true)

        const response = await axios.get("http://localhost:8080/api/v1/students")
        setStudentRecord(response.data)

       await new Promise((resolve) => setTimeout(resolve, 1000));
      } catch (error) {
        console.error("Error fetching student data:", error);
      }
        finally{
          setLoading(false)
        }
    }

    useEffect(() =>{
      studentData()
    }, [])

      if(loading) return (
        <div className="fixed inset-0  flex items-center justify-center bg-white/70 backdrop-blur-sm">
          <div className="flex flex-col items-center gap-2">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600"></div>
            <p className="text-blue-600 font-semibold">Loading Student Rec...</p>
          </div>
      </div>
    );

    return(
        <div className="body-container">
            <button className='w-50 h-10 reg-btn' onClick={() => setRegFormOpen(true)} >Add Student</button>
            
            <table>
              <thead>
                <tr>
                  <td>Student ID</td>
                  <td>Student Name</td>
                  <td>Gender</td>
                  <td>Class</td>
                  <td>Stream</td>
                  <td>Action</td>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>ST001</td>
                  <td>Omolo Pasikali</td>
                  <td>Male</td>
                  <td>S.1</td>
                  <td>B</td>
                  <td>Delet Edit View</td>
                </tr>

                <tr>
                  <td>ST002</td>
                  <td>Kijjambu Joseph</td>
                  <td>Male</td>
                  <td>S.2</td>
                  <td>A</td>
                  <td>Delet Edit View</td>
                </tr>
                
                {studentRecord.map((item) => 
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.gender}</td>
                    <td>{item.class}</td>
                    <td>{item.stream}</td>
                    <td>
                      <button className='btn btn-primary'>Edit</button>
                      <button className='btn btn-danger'>Delete</button>
                    </td>

                  </tr>

                )}
              </tbody>
              
            </table>
            <ReactModal
              isOpen={regFormOpen}
              onRequestClose={() => {
                console.log("clicked");
                setRegFormOpen(false)
              }}
              shouldCloseOnOverlayClick={true}
              shouldCloseOnEsc={true}
              style={{

                overlay: {
                  backgroundColor: "rgba(0,0,0,0.5)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                },
                content: {
                  position: "relative",
                  inset: "unset",
                  width: "95%",
                  maxWidth: "100%",
                  maxHeight: "95vh",
                  overflowY: "auto",
                  padding: "20px",
                  borderRadius: "12px"
                }
              }}
          >
            {<StudentRegistration onClose={() => setRegFormOpen(false)} />}
          </ReactModal>
        </div>
    );
}

export default StudentBody;