import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';


function Create() {
    const [name, setname] = useState("")
    const [age, setage] = useState("")
    const [email, setemail] = useState("")
    const navigate = useNavigate(); 

    function SubmitHandle(e){
        e.preventDefault()
        axios.post("https://63e4b9638e1ed4ccf6e4895c.mockapi.io/crud",{
            e_name: name,
            e_age : age,
            e_email : email
        }).then(()=>{
            navigate("/read")
        })
    }

    return (
        <>
            <div className='row'>
                <div className='col-md-4'>
                    <div className='mb-2 mt-2'>
                        <Link to='/read'>
                            <button className='btn btn-primary'>Read Data</button>
                        </Link>
                    </div>
                    <div className='bg-primary p-4 text-center'>
                        <h1>Create Data</h1>
                    </div>
                    <form onSubmit={SubmitHandle}>
                        <div className='form-group'>
                            <label>Enter Name: </label>
                            <input type='text' placeholder='Name' onChange={(e) => setname(e.target.value)} className='form-control' />
                        </div>
                        <div className='form-group'>
                            <label>Enter Age: </label>
                            <input type='number' placeholder='Age' onChange={(e) => setage(e.target.value)} className='form-control' />
                        </div>
                        <div className='form-group'>
                            <label>Enter Email: </label>
                            <input type='email' placeholder='Email' onChange={(e) => setemail(e.target.value)} className='form-control' />
                        </div>
                        <br />
                        <div className='d-grid'>
                            <input type='submit' value='Submit' className='btn btn-primary' />
                        </div>
                    </form>
                    <hr />
                </div>
            </div>
        </>
    )
}

export default Create