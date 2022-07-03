import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from './../../img/logo (2).png'

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const userLogout = () => {
        signOut(auth);
    }
    const navItems = 
       <>
       <li><Link to='/'>Home</Link></li> 
       <li><Link to='/classroom'>Classroom</Link></li>  
       {
           user && <li><Link to='/dashboard'>Dashboard</Link></li>
       }
       <li><Link to='/contact'>Contact</Link></li>
       {user ?
       <li><a onClick={userLogout}>Logout</a></li>
       :
       <li><Link to='/login'>Login</Link></li>}
       </>
    
    return (
        <div class="navbar bg-base-100">
            <div class="navbar-start ml-5">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                      {navItems}
                    </ul>
                </div>
                <div class="w-32 rounded-full">
                    <img src={logo} alt='logo' />
                </div>
            </div>
            <div class="navbar-end mr-5 hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    {navItems}
                </ul>
            </div>
        </div>
    );
};

export default Header;