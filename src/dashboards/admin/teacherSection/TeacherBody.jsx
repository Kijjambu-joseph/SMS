import '/src/dashboards/admin/studentSection/StudentBody.css'
import ReactModal from 'react-modal';
import  { useEffect, useState } from 'react';
import axios from 'axios';
import '/src/dashboards/admin/teacherSection/Teacherbody.css'
import TeacherRegistration from '/src/auth/TeacherRegistration.jsx'

ReactModal.setAppElement("#root");

const TeacherBody = () => {
    const [regFormOpen, setRegFormOpen] = useState(false);
    const [loading, setLoading] = useState(true)

    const [teacherRecord, setTeacherRecord] = useState([
      {id:'1', identity:'TR001', name:'Ochieng John', gender:'Male', subjects:'MTC/PHY', role:'ClassTeaccher'}
    ]);

    const handleDelete = (id) =>{
      setTeacherRecord(prevRecoard => prevRecoard.filter(teachers =>teachers.id !==id))
    }

    const teacherData = async () =>{
      try{
        setLoading(true)

        const response = await axios.get("http://localhost:8080/api/v1/students")
        setTeacherRecord(response.data)

       await new Promise((resolve) => setTimeout(resolve, 1000));
      } catch (error) {
        console.error("Error fetching student data:", error);
      }
        finally{
          setLoading(false)
        }
    }

    useEffect(() =>{
      teacherData()
    }, [])

    if(loading) return (
      <div className="fixed inset-0  flex items-center justify-center bg-white/70 backdrop-blur-sm">
        <div className="flex flex-col items-center gap-2">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600"></div>
          <p className="text-blue-600 font-semibold">Loading Teachers...</p>
        </div>
  </div>
    );

    return(
        <div className="body-container">
            <button className='w-50 h-10 reg-btn' onClick={() => setRegFormOpen(true)} >Add New Teacher</button>
            <button className='refreshBtn' onClick={teacherData}>Refresh</button>
            
            <table>
              <thead>
                <tr>
                  <th>Teacher ID</th>
                  <th>Name</th>
                  <th>Gender</th>
                  <th>Subject Comb</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                
                {teacherRecord.map((item) => 
                  <tr key={item.id}>
                    <td>{item.identity}</td>
                    <td>{item.name}</td>
                    <td>{item.gender}</td>
                    <td>{item.subjects}</td>
                    <td>{item.role}</td>
                    <td className='action-icons'>
                      <button className='view' title='View Student'> <i className="fa-solid fa-eye"></i> View</button>
                      <button className='edit' title='Edit Student'> <i className="fa-solid fa-pen-to-square"  ></i> Edit</button>
                      <button className='delete' title='Delete Student' onClick={() =>handleDelete(item.id)}> <i className="fa-regular fa-trash-can" ></i> Delete</button>
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
            {<TeacherRegistration onClose={() => setRegFormOpen(false)} />}
          </ReactModal>
        </div>
    );
}

export default TeacherBody;