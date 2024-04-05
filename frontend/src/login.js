import React from 'react'
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import validation from './LoginValidation.js';
import { useState } from 'react';
import axios from 'axios';



function Login(){
    const [values, setValues] = useState({
        email:'',
        password:''
    })
    const navigate = useNavigate();
    const [errors, setErrors] = useState({})
    const handleInput= (event)=>{
        setValues( prev=> ({...prev, [event.target.name]:[event.target.value]}))
    }
    const handleSubmit= (event)=>{
        event.preventDefault();
        setErrors(validation(values));
        if(errors.email === "" && errors.password === ""){
            axios.post('http://localhost:8081/login', values)
            .then(res=> {
                    if(res.data === "Success"){
                        navigate("/home");
                    }
                    else{
                        alert('No record existed');
                    }
            })
            .catch(err => console.log(err));
        }
    }
    return(
        <div id='container' className='d-flex justify-content-center align-items-center vh-100'>
            <div id='maincard'className='border-top border-success p-5 rounded-2'>
            <h3 className='fw-light mb-5'>Sign-In</h3>
                <form action="" onSubmit={handleSubmit}>
                    {/* <div class='mb-3'>
                        <label class='w-25' for="name">Name</label>
                        <input id='data' class='ms-5' type="text" placeholder='Enter your name'/>
                    </div>  */}
                    <div className='mb-3'>
                        <label className='w-25' htmlFor="email">Email</label>
                        <input id='emaildata' className='ms-5' type="email" placeholder='Enter your mail'
                        name='email' onChange={handleInput}/>
                        {errors.email && <div className="text-danger m-1 ms-0">{errors.email}</div>}
                    </div>
                    <div className='mb-3'>
                        <label className='w-25' htmlFor="password">Password</label>
                        <input id='passworddata' className='ms-5' type="password" placeholder='Enter your password'
                        name='password' onChange={handleInput}/>
                        {errors.password && <div className="text-danger m-1 ms-0">{errors.password}</div>}
                    </div>
                    {/* <div class='mb-3'>
                        <label class='w-25' for="phone">Phone</label>
                        <input id='data' class='ms-5' type="number" placeholder='Enter your number'/>
                    </div> */}
                    <div className='d-flex justify-content-around mt-5 mb-2'>
                        <button type="submit" className='col-5 btn btn-success'>Login</button>
                        <Link to='/signup' className='col-5 btn btn-secondary text-decoration-none'>Register</Link>
                    </div>
                    <p className='d-flex justify-content-center align-items-center mt-4 mb-0'>Agree to terms and conditions</p>
                </form>
            </div>
        </div>
    )
}

export default Login