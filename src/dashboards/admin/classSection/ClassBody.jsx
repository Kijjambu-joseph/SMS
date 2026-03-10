import '/src/dashboards/admin/studentSection/StudentBody.css'
import ReactModal from 'react-modal';
import  { useEffect, useState } from 'react';
import axios from 'axios';
import '/src/dashboards/admin/teacherSection/Teacherbody.css'
import ClassRegForm from '/src/dashboards/admin/classSection/ClassRegForm.jsx'

ReactModal.setAppElement("#root");

const ClassBody = () => {
    const [regFormOpen, setRegFormOpen] = useState(false);
    const [classRecord, setClassRecord] = useState([]);
    const [loading, setLoading] = useState(true)

    const classData = async () =>{
      try{
        setLoading(true)

        const response = await axios.get("http://localhost:8080/api/v1/students")
        setClassRecord(response.data)

       await new Promise((resolve) => setTimeout(resolve, 1000));
      } catch (error) {
        console.error("Error fetching student data:", error);
      }
        finally{
          setLoading(false)
        }
    }

    useEffect(() =>{
      classData()
    }, [])

    if(loading) return (
      <div className="fixed inset-0  flex items-center justify-center bg-white/70 backdrop-blur-sm">
        <div className="flex flex-col items-center gap-2">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600"></div>
          <p className="text-blue-600 font-semibold">Loading Class Rec...</p>
        </div>
  </div>
    );

    return(
        <div className="body-container">
            <button className='w-50 h-10 reg-btn' onClick={() => setRegFormOpen(true)} >Add Class</button>
            <button className='refreshBtn' onClick={classData}>Refresh</button>
            
            <table>
              <thead>
                <tr>
                  <td>Class ID</td>
                  <td>Class Level</td>
                  <td>Class Name</td>
                  <td>Class Teacher</td>
                  <td>Room Number</td>
                  <td>Capacity</td>
                </tr>
              </thead>

              <tbody>
                
                {classRecord.map((item) => 
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.level}</td>
                    <td>{item.stream}</td>
                    <td>{item.teacher}</td>
                    <td>{item.roomNo}</td>
                    <td>{item.capacity}</td>
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
                  width: "50vw",
                  // maxWidth: "100%",
                  overflowY: "auto",
                  // padding: "20px",
                  borderRadius: "12px"
                }
              }}
          >
            {<ClassRegForm onClose={() => setRegFormOpen(false)} />}
          </ReactModal>
        </div>
    );
}

export default ClassBody;