import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Edit() {
    const [id, setid] = useState(0)
    const [name, setname] = useState("")
    const [age, setage] = useState("")
    const [email, setemail] = useState("")
     const updateNavigate = useNavigate()

    useEffect(() => {
        setid(localStorage.getItem("id"))
        setname(localStorage.getItem("name"))
        setage(localStorage.getItem("age"))
        setemail(localStorage.getItem("email"))
    }, [])

    function submitHandle(e) {
        e.preventDefault()
        axios.put(`https://63e4b9638e1ed4ccf6e4895c.mockapi.io/crud/${id}`,{
            e_name: name,
            e_age: age,
            e_email: email
        }).then(()=>{
            updateNavigate("/read")
        })
    }
    return (
        <>
            <div className='row'>
                <div className='col-md-4'>
                    <div className='mb-2 mt-2'>
                        <Link to='/'>
                            <button className='btn btn-primary'>Read Data</button>
                        </Link>
                    </div>
                    <div className='bg-primary p-4 text-center'>
                        <h1 style={{ color: "white" }}>Update Data</h1>
                    </div>
                    <form onSubmit={submitHandle} >
                        <div className='form-group'>
                            <label>Enter Name: </label>
                            <input type='text' value={name} onChange={(e) => setname(e.target.value)} placeholder='Name' className='form-control' />
                        </div>
                        <div className='form-group'>
                            <label>Enter Age: </label>
                            <input type='number' value={age} onChange={(e) => setage(e.target.value)} placeholder='Age' className='form-control' />
                        </div>
                        <div className='form-group'>
                            <label>Enter Email: </label>
                            <input type='email' value={email} onChange={(e) => setemail(e.target.value)} placeholder='Email' className='form-control' />
                        </div>
                        <br />
                        <div className='d-grid'>
                            <input type='submit' value='Update' className='btn btn-primary' />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Edit