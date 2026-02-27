import '/src/dashboards/admin/studentSection/StudentBody.css'
import ReactModal from 'react-modal';
import React, { useState } from 'react';
import StudentRegistration from '/src/auth/StudentRegistration.jsx'

ReactModal.setAppElement("#root");

const StudentBody = () => {
    const [regFormOpen, setRegFormOpen] = useState(false);
    const [students, setStudents] = useState([]);

    return(
        <div className="body-container">
            <button className='w-50 h-10 reg-btn' onClick={() => setRegFormOpen(true)} >Add Student</button>
            <table>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Gender</th>
                  <th>Class</th>
                  <th>Stream</th>
                  <th>Actions</th>
                </tr>

                <tr>
                  <td>ST001</td>
                  <td>John Doe</td>
                  <td>Male</td>
                  <td>S.1</td>
                  <td>Science</td>
                  <td>✅ ❌</td>
                </tr>

                <tr>
                  <td>ST001</td>
                  <td>John Doe</td>
                  <td>Male</td>
                  <td>S.1</td>
                  <td>Science</td>
                  <td>✅ ❌</td>
                </tr>

                <tr>
                  <td>ST001</td>
                  <td>John Doe</td>
                  <td>Male</td>
                  <td>S.1</td>
                  <td>Science</td>
                  <td>✅ ❌</td>
                </tr>

                <tr>
                  <td>ST001</td>
                  <td>John Doe</td>
                  <td>Male</td>
                  <td>S.1</td>
                  <td>Science</td>
                  <td>✅ ❌</td>
                </tr>

                <tr>
                  <td>ST001</td>
                  <td>John Doe</td>
                  <td>Male</td>
                  <td>S.1</td>
                  <td>Science</td>
                  <td>✅ ❌</td>
                </tr>

                <tr>
                  <td>ST001</td>
                  <td>John Doe</td>
                  <td>Male</td>
                  <td>S.1</td>
                  <td>Science</td>
                  <td>✅ ❌</td>
                </tr>

                <tr>
                  <td>ST001</td>
                  <td>John Doe</td>
                  <td>Male</td>
                  <td>S.1</td>
                  <td>Science</td>
                  <td>✅ ❌</td>
                </tr>

                <tr>
                  <td>ST001</td>
                  <td>John Doe</td>
                  <td>Male</td>
                  <td>S.1</td>
                  <td>Science</td>
                  <td>✅ ❌</td>
                </tr>

                <tr>
                  <td>ST001</td>
                  <td>John Doe</td>
                  <td>Male</td>
                  <td>S.1</td>
                  <td>Science</td>
                  <td>✅ ❌</td>
                </tr>

                <tr>
                  <td>ST001</td>
                  <td>John Doe</td>
                  <td>Male</td>
                  <td>S.1</td>
                  <td>Science</td>
                  <td>✅ ❌</td>
                </tr>

                <tr>
                  <td>ST001</td>
                  <td>John Doe</td>
                  <td>Male</td>
                  <td>S.1</td>
                  <td>Science</td>
                  <td>✅ ❌</td>
                </tr>

                <tr>
                  <td>ST001</td>
                  <td>John Doe</td>
                  <td>Male</td>
                  <td>S.1</td>
                  <td>Science</td>
                  <td>✅ ❌</td>
                </tr>

                <tr>
                  <td>ST001</td>
                  <td>John Doe</td>
                  <td>Male</td>
                  <td>S.1</td>
                  <td>Science</td>
                  <td>✅ ❌</td>
                </tr>

                <tr>
                  <td>ST001</td>
                  <td>John Doe</td>
                  <td>Male</td>
                  <td>S.1</td>
                  <td>Science</td>
                  <td>✅ ❌</td>
                </tr>

                <tr>
                  <td>ST001</td>
                  <td>John Doe</td>
                  <td>Male</td>
                  <td>S.1</td>
                  <td>Science</td>
                  <td>✅ ❌</td>
                </tr>

                <tr>
                  <td>ST001</td>
                  <td>John Doe</td>
                  <td>Male</td>
                  <td>S.1</td>
                  <td>Science</td>
                  <td>✅ ❌</td>
                </tr>

                <tr>
                  <td>ST001</td>
                  <td>John Doe</td>
                  <td>Male</td>
                  <td>S.1</td>
                  <td>Science</td>
                  <td>✅ ❌</td>
                </tr>

                <tr>
                  <td>ST001</td>
                  <td>John Doe</td>
                  <td>Male</td>
                  <td>S.1</td>
                  <td>Science</td>
                  <td>✅ ❌</td>
                </tr>

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