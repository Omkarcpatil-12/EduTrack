import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function EditStudent() {
    const { id } = useParams();
    let updUrl="http://localhost:8080/student/update"

    const navigate=useNavigate()

    const [student, setStudent] = useState({
        name: "",
        branch: "",
        score: ""
    });

    useEffect(() => {
        axios.get(`http://localhost:8080/student/${id}`)
            .then((res) => {
                setStudent(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudent({ ...student, [name]: value });
    };
     
    const subHandler= async (e)=>{
        e.preventDefault()
      await axios.put(`${updUrl}/${id}`,student).then((res)=>{
        setStudent(res.data)
        alert("sudent record updated sucessfully...")
        setStudent({name:'',branch:'',score:''})
        navigate("/allstudent")
      }).catch((error)=>{
        console.log(error)
      })
             
    }
    return (
        <div className="bg-light min-vh-100 d-flex align-items-center">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <h4 className="card-title text-center text-primary mb-4">Edit Student</h4>

                                <form onSubmit={subHandler}>
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="name"
                                            value={student.name}
                                            onChange={handleChange}
                                            placeholder='Enter Name'
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Branch</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="branch"
                                            value={student.branch}
                                            onChange={handleChange}
                                            placeholder='Enter Branch'
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Score</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            name="score"
                                            value={student.score}
                                            onChange={handleChange}
                                            placeholder='Enter Score'
                                        />
                                    </div>
                                    <div className='text-center'>
                                        <button className='btn btn-primary '>Update</button>
                                    </div>


                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditStudent;
