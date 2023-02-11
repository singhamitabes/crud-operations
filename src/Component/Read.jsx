import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

function Read() {
    const [apiData, setapiData] = useState([])

    function getData() {
        axios.get("https://63e4b9638e1ed4ccf6e4895c.mockapi.io/crud")
            .then((resp) => {
                setapiData(resp.data)
            })
    }
    useEffect(() => {
        getData()
    }, [])

    function deleteHandle(id){
         axios.delete(`https://63e4b9638e1ed4ccf6e4895c.mockapi.io/crud/${id}`)
         .then(()=>{
            getData()
         })
    }
    function setDataToStorage(id,name,age,email){
        localStorage.setItem("id",id)
        localStorage.setItem("name",name)
        localStorage.setItem("age",age)
        localStorage.setItem("email",email)
    }

    return (
        <>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='mb-2 mt-2'>
                        <Link to='/create'>
                            <button className='btn btn-primary'>Create New Data</button>
                        </Link>
                    </div>

                    <table className='table table-bordered table-striped table-dark table-hover'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>NAME</th>
                                <th>AGE</th>
                                <th>EMAIL</th>
                                <th>EDIT</th>
                                <th>DELETE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                apiData.map((item) => {
                                    return (
                                        <tr>
                                            <td>{item.id}</td>
                                            <td>{item.e_name}</td>
                                            <td>{item.e_age}</td>
                                            <td>{item.e_email}</td>
                                            <td>
                                                <Link to='/edit'>
                                                    <button className='btn btn-primary' onClick={()=>{setDataToStorage(item.id,item.e_name,item.e_age,item.e_email)}}>Edit</button>
                                                </Link>
                                            </td>
                                            <td>
                                                <button className='btn btn-danger' onClick={()=>deleteHandle(item.id)}>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Read