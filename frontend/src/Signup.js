import React from 'react'
import validation from './SignupValidation.js';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Signup() {

    const [values, setValues] = useState({
        name:'',
        email:'',
        password:'',
        phone:''
    })
    const navigate = useNavigate();
    const [errors, setErrors] = useState({})
    const handleInput= (event)=>{
        setValues( prev=> ({...prev, [event.target.name]:event.target.value}))
    }
    const handleSubmit= (event)=>{
        event.preventDefault();
        setErrors(validation(values));
        if(errors.name === "" && errors.email === "" && errors.password === "" && errors.phone === ""){
            axios.post('http://localhost:8081/signup', values)
            .then(res=> {
                navigate('/');
            })
            .catch(err => console.log(err));
        }
    }

  return (
    <div id='container' className='d-flex justify-content-center align-items-center vh-100'>
            <div id='maincard'className='border-top border-success p-5 rounded-2'>
                <h3 className='fw-light mb-5'>Sign-Up</h3>
                <form action="" onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label className='w-25' htmlFor="name">Name</label>
                        <input id='namedata' className='ms-5' type="text" placeholder='Enter your name'
                        name='name' onChange={handleInput}/>
                        {errors.name && <div className="text-danger m-1 ms-0">{errors.name}</div>}
                    </div>
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
                    <div className='mb-3'>
                        <label className='w-25' htmlFor="phone">Phone</label>
                        <input id='phonedata' className='ms-5' type="number" placeholder='Enter your number'
                        name='phone' onChange={handleInput}/>
                        {errors.phone && <div className="text-danger m-1 ms-0">{errors.phone}</div>}
                    </div>
                    <div className='d-flex justify-content-around mt-5 mb-2'>
                        <button type='submit' className='col-5 btn btn-success'>Register</button>
                        <Link to="/" className='col-5 btn btn-secondary text-decoration-none'>Login</Link>
                    </div>
                    <p className='d-flex justify-content-center align-items-center mt-4 mb-0'>Agree to terms and conditions</p>
                </form>
            </div>
        </div>
  );
}

export default Signup
