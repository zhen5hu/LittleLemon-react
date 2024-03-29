import React from 'react';
import logo from '../images/Logo.jpg';
import {HStack,VStack} from "@chakra-ui/react";

const Footer = () => (
    <HStack className='footer' alignItems='flex-start'>
        <img src={logo} alt="Logo" width="20%"/>
        <VStack alignItems='flex-start'>
            <h3 className='margin-b' >Navigation</h3>
            <li><a href='url1'>Home</a></li>
            <li><a href='url2'>About</a></li>
            <li><a href='url3'>Menu</a></li>
            <li><a href='url4'>Reservations</a></li>
            <li><a href='url5'>Order Online</a></li>
            <li><a href='url6'>Login</a></li>
        </VStack>
        <VStack alignItems='flex-start'>
            <h3 className='margin-b'>Contact</h3>
            <li><a href='url7'>Address</a></li>
            <li><a href='url8'>Phone Number</a></li>
            <li><a href='url9'>Email</a></li>
        </VStack>
        <VStack alignItems='flex-start'>
            <h3 className='margin-b'>Social Media</h3>
            <li><a href='url10'>Facebook</a></li>
            <li><a href='ur11'>Instagram</a></li>
            <li><a href='url12'>Website</a></li>
        </VStack>
    </HStack>
)
export default Footer;