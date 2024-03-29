import React from 'react';
import logo from '../images/Logo.jpg';
import {HStack} from "@chakra-ui/react";

const Header = () => (
    <HStack className='header'>
        <img src={logo} alt="Logo" width="20%"/>
        <li><a href='index.html'>Home</a></li>
        <li><a href='url2'>About</a></li>
        <li><a href='url3'>Menu</a></li>
        <li><a href='url4'>Reservations</a></li>
        <li><a href='url5'>Order Online</a></li>
        <li><a href='url6'>Login</a></li>
    </HStack>
)
export default Header;