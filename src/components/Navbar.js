import React from 'react';
import { Link } from 'react-router-dom';

import { toast } from 'react-toastify';
import logo from '../assets/logo.png';
import './Navbar.css';

const Navbar = (props) => {
    let isLoggedIn=props.isLoggedIn;
    let setIsLoggedIn=props.setIsLoggedIn;
  return (
    <div className='outerdiv'>
        <Link to="/">
            <img src={logo} alt="logo" width={160} height={32} loading='lazy'/>
        </Link>
        <nav>
            <ul className='nav'>
                <li><Link className='link' to="/">Home</Link></li>
                <li><Link className='link' to="/">About</Link></li>
                <li><Link className='link' to="/">Contact</Link></li>
            </ul>
        
        </nav>
        <div className='buttons'>
           
            { !isLoggedIn &&
                <Link to='/login'><button className='but'>Log in</button></Link>
            }
            { !isLoggedIn &&
                <Link to='/signup'><button className='but'>Sign up</button></Link>
            }
            { isLoggedIn &&
                <Link to='/'><button className='but' onClick={()=>{
                    setIsLoggedIn(false);
                    toast.success("Logged Out")
                }}>Log Out</button></Link>
            }
            { isLoggedIn &&
                <Link to='/dashboard'><button className='but'> Dashboard</button></Link>
            }
        </div>
      
    </div>
  )
}

export default Navbar
