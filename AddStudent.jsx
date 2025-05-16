import React, {  useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
function AddStudent() {

 const navigate=useNavigate()

 

    let postUrl = "http://localhost:8080/student/add"

        const [student,setStudent]=useState({
            name:"",
            branch:"",
            score:""
        })

        const handleInput=(e)=>{
          setStudent({...student,[e.target.name]:e.target.value})
        }
          
        const submitHandler= async (e)=>{
            e.preventDefault()
            await axios.post(postUrl,student)
            setStudent({name:'',branch:'',score:''})
            navigate("/allstudent")
            alert("student added sucessfully");

        }

        


    return (
        <>
              
            <div className="bg-light min-vh-100 d-flex align-items-center">
                <div className="container ">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="card shadow-sm">
                                <div className="card-body">
                                    <h4 className="card-title text-center text-primary mb-4">Add Student</h4>

                                    <form onSubmit={submitHandler}>
                                        <div className="form-group">
                                            <label htmlFor="name">Name</label>
                                            <input type="text" className="form-control" name="name" placeholder="Enter name" value={student.name} onChange={handleInput} />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="branch">Branch</label>
                                            <input type="text" className="form-control" placeholder="Enter branch" name="branch" value={student.branch} onChange={handleInput} />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="score">Score</label>
                                            <input type="number" step="0.01" className="form-control" placeholder="Enter score" name="score" value={student.score} onChange={handleInput} />
                                        </div>

                                        <button type="submit" className="btn btn-primary btn-block" >Submit</button>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AddStudent