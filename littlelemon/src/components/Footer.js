import React from 'react';
import logo from '../images/Logo.jpg';
import {VStack} from "@chakra-ui/react";
import { Link } from 'react-router-dom';

const Footer = () => (
    <section className='footer'>
        <img src={logo} alt="Logo" width="20%"/>
        <VStack alignItems='flex-start'>
            <h3 className='margin-b' >Navigation</h3>
            <Link to="/" className='LK'>Home</Link>
            <Link to="/about" className='LK'>About</Link>
            <Link to="/menu" className='LK'>Menu</Link>
            <Link to="/booking" className='LK'>Reservation</Link>
            <Link to="/order" className='LK'>Order Online</Link>
            <Link to="/login" className='LK'>Login</Link>
        </VStack>
        <VStack alignItems='flex-start'>
            <h3 className='margin-b'>Contact</h3>
            <Link to="/address" className='LK'>Address</Link>
            <Link to="/phone" className='LK'>Phone Number</Link>
            <Link to="/email" className='LK'>Email</Link>
        </VStack>
        <VStack alignItems='flex-start'>
            <h3 className='margin-b'>Social Media</h3>
            <Link to="/facebook" className='LK'>Facebook</Link>
            <Link to="/instagram" className='LK'>Instagram</Link>
            <Link to="/website" className='LK'>Website</Link>
        </VStack>
    </section>
)
export default Footer;