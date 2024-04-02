import React from 'react';
import logo from '../images/Logo.jpg';
import { Link } from 'react-router-dom';

const Header = () => (
    <ul className='header'>
        <img src={logo} alt="Logo" width="20%"/>
        <Link to="/" className='LK'>Home</Link>
        <Link to="/about" className='LK'>About</Link>
        <Link to="/menu" className='LK'>Menu</Link>
        <Link to="/booking" className='LK'>Reservation</Link>
        <Link to="/order" className='LK'>Order Online</Link>
        <Link to="/login" className='LK'>Login</Link>
    </ul>
)
export default Header;