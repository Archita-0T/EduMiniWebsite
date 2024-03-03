import React from 'react';
import bgImage from '../assets/bg.jpg';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import './Template.css';
import {FcGoogle} from 'react-icons/fc';

const Template = ({title, desc1, desc2, formType,setIsLoggedIn, image}) => {

  return (
    <div className='temp'>
            <div className='temp1'>
        <h1 className='heading'>{title}</h1>
        <p className='para'>
            <span className='desc1'>{desc1}</span><br/><span className='desc2'>{desc2}</span>
        </p>
        {formType==="signup" ? (<SignUpForm setIsLoggedIn={setIsLoggedIn}/>): (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}
        <div className='lines'>
            <div className='line'></div>
            <p className='or'>OR</p>
            <div className='line'></div>
        </div>
        <button className='buts'><FcGoogle/><p>Sign in with Google</p></button>
      
    </div>
    <div className='bgim'>
        <img src={bgImage} height={366} width={420} alt='backgroundImage' loading='lazy'/>
        <img className='stim' src={image} alt='students' width={420} height={352} loading='lazy'/>
    </div>

    </div>

  )
}

export default Template
