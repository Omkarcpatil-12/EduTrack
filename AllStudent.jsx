import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function AllStudent() {

    let getUrl = "http://localhost:8080/student-list"
    let delUrl="http://localhost:8080/student/delete"
    const navigate=useNavigate()

    const [student, setStudent] = useState([])

    useEffect(() => {
        fetchStudents()
    }, [])

    const fetchStudents = () => {
        axios.get(getUrl).then((res) => {
            setStudent(res.data)
        }).catch((error) => {
            console.log(error)
        })
    }

    const delHandler= async(obj)=>{
        setStudent(student.filter((e)=>e.id!==obj.id))
        await axios.delete(`${delUrl}/${obj.id}`)
    }
    
   

    return (
        <div className="container mt-4">
            <h2 className="text-center text-danger mb-4">Students Info</h2>
            <div className="row">
                {student.map((e,index) => (
                    <div className="col-md-4 mb-4" key={index}>
                        <div className="card shadow-sm">
                            <div className="card-body m-auto">
                                
                                <p className="card-text ">
                                <strong>Name:</strong> {e.name}<br />
                                    
                                    <strong>Branch:</strong> {e.branch || 'N/A'}<br />
                                    <strong>Score:</strong> {e.score} <br />
                                    <button className='btn btn-primary' onClick={()=>{navigate(`/edit/${e.id}`)}}>Edit </button> &nbsp;
                                    <button className='btn btn-primary' onClick={()=>{if(window.confirm("Are u sure want to delete the record?"))delHandler(e)}}>Delete</button>
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
    )
}

export default AllStudent
