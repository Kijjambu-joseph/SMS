import '/src/dashboards/admin/studentSection/StudentBody.css'
import ReactModal from 'react-modal';
import  { useEffect, useState } from 'react';
import axios from 'axios';
import '/src/dashboards/admin/teacherSection/Teacherbody.css'
import TeacherRegistration from '/src/auth/TeacherRegistration.jsx'

ReactModal.setAppElement("#root");

const MarksTable = () => {
    const [marksRecord, setMarksRecord] = useState([]);
    const [loading, setLoading] = useState(true)

    const marksData = async () =>{
      try{
        setLoading(true)

        const response = await axios.get("http://localhost:8080/api/v1/students")
        setMarksRecord(response.data)

       await new Promise((resolve) => setTimeout(resolve, 1000));
      } catch (error) {
        console.error("Error fetching student data");
      }
        finally{
          setLoading(false)
        }
    }

    useEffect(() =>{
      marksData()
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
            <table>
              <thead>
                <tr>
                  <td> Student ID</td>
                  <td>ENG</td>
                  <td>MTC</td>
                  <td>BIO</td>
                  <td>CHE</td>
                  <td>PHY</td>
                  <td>GEO</td>
                  <td>HIST</td>
                  <td>CRE</td>
                  <td>TOTAL</td>
                </tr>
              </thead>

              <tbody>
                
                {marksRecord.map((item) => 
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.eng}</td>
                    <td>{item.mtc}</td>
                    <td>{item.bio}</td>
                    <td>{item.chem}</td>
                    <td>{item.phy}</td>
                    <td>{item.geo}</td>
                    <td>{item.hist}</td>
                    <td>{item.cre}</td>
                    <td>{item.total}</td>
                    <td>
                      <button className='btn btn-primary'>Edit</button>
                      <button className='btn btn-danger'>Delete</button>
                    </td>
                  </tr>

                )}

                <tr>
                    <td>ST001</td>
                    <td>10</td>
                    <td>10</td>
                    <td>10</td>
                    <td>10</td>
                    <td>10</td>
                    <td>10</td>
                    <td>10</td>
                    <td>10</td>
                    <td>800</td>
                </tr>
              </tbody>
              
            </table>
        </div>
    );
}

export default MarksTable;