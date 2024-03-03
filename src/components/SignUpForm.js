import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './LoginForm.css';

const SignUpForm = ({setIsLoggedIn}) => {
    const navigate=useNavigate();
    const[formData, setFormData]=useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:"",
    })
    const[accountType, setAccountType]=useState("student");
    function changeHandler(event){
        setFormData((prev)=>({
            ...prev, [event.target.name]:event.target.value
        }))

    }
    const[showPassword, setShowPassword]=useState(false);
    const[showConfirmPassword, setShowConfirmPassword]=useState(false);
    function submitHandler(event){
        event.preventDefault();
        if(formData.password !== formData.confirmPassword){
            toast.error("Your passwords do not match !");
            return;
        }
        setIsLoggedIn(true);
        toast.success("Account Created successfully");
        const accountData={
            ...formData
        };
        const finalData={
            ...accountData,accountType
        };
        console.log("printing final account data");
        console.log(finalData);
        navigate("/dashboard");

    }
  return (
    <div>
        <div className='btnn'>
            <button className= {accountType==="student" ? 'class1' : 'class2'} onClick={()=>setAccountType("student")}>Student</button>
            <button className={accountType==="instructor" ? 'class1' : 'class2'} onClick={()=>setAccountType("instructor")}>Instructor</button>
        </div>
        <form onSubmit={submitHandler} className='form1'>
            <div className='first'>
            <label className='lab lab1'>
                <p className='field'>First Name<sup className='star'>*</sup></p>
                <input className='input' type='text' required placeholder='Enter first name' value={formData.firstName} name='firstName' onChange={changeHandler}></input>

            </label>

            <label className='lab lab1'>
                <p className='field'>Last Name<sup className='star'>*</sup></p>
                <input className='input' type='text' required placeholder='Enter last name' value={formData.lastName} name='lastName' onChange={changeHandler}></input>

            </label>

            </div>


            <label className='lab'>
                <p className='field'>Email Address<sup className='star'>*</sup></p>
                <input className='input' type='email' required placeholder='Enter email address' value={formData.email} name='email' onChange={changeHandler}></input>

            </label>
            <div className='first'>
            <label className='lab lab1'>
                <p className='field'>Create Password<sup className='star'>*</sup></p>
                <input className='input' required type={showPassword ? ("text"): ("password")} name="password" value={FormData.password} onChange={changeHandler} placeholder='Enter password'></input>
                <span className='eyes1' onClick={()=>setShowPassword((prev)=>!prev)}>
                    {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>): (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                </span>

            </label>

            <label className='lab lab1'>
                <p className='field'>Confirm Password<sup className='star'>*</sup></p>
                <input className='input' required type={showConfirmPassword ? ("text"): ("password")} name="confirmPassword" value={FormData.confirmPassword} onChange={changeHandler} placeholder='Confirm password'></input>
                <span className='eyes2' onClick={()=>setShowConfirmPassword((prev)=>!prev)}>
                    {showConfirmPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>): (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                </span>
            </label>

            </div>
            <button className='btn1 btn2'>
                Create Account
            </button>


        </form>
      
    </div>
  )
}

export default SignUpForm
