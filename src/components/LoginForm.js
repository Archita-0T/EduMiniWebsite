import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './LoginForm.css';


const LoginForm = ({setIsLoggedIn}) => {
    const navigate=useNavigate();
    const[formData, setFormData]=useState({
        email:"",
        password:"",
    });
    function changeHandler(event){
        setFormData((prev)=>({
            ...prev, [event.target.name]:event.target.value
        }))

    }
    const[showPassword, setShowPassword]=useState(false);
    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        console.log("printing the form data");
        console.log(formData);
        navigate("/dashboard");
    }
    
  return (
    <div>
        <form onSubmit={submitHandler} className='form1'> 
            <label className='lab'>
                <p className='field'>Enter Email Address<sup className='star'>*</sup></p>
                <input className='input' required type='email' value={FormData.email} name="email" onChange={changeHandler} placeholder='Enter email address'></input>
            </label>

            <label className='lab'>
                <p className='field'>Enter Password<sup className='star'>*</sup></p>
                <input className='input' required type={showPassword ? ("text"): ("password")} name="password" value={FormData.password} onChange={changeHandler} placeholder='Enter password'></input>
                <span className='eyes' onClick={()=>setShowPassword((prev)=>!prev)}>
                    {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>): (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                </span>
                <Link to="#" className='links'><p className='fp'>Forgot Password</p></Link>
            </label>
            <button className='btn1'>
                Sign In
            </button>

        </form>
      
    </div>
  )
}

export default LoginForm
