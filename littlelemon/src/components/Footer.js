import React from 'react';
import logo from '../images/Logo.jpg';
import {HStack,VStack} from "@chakra-ui/react";

const Footer = () => (
    <HStack spacing={8}>
        <img src={logo} alt="Logo" width="200rem"/>
        <VStack>
            <h2>Navigation</h2>
            <ul>
                <li><a href='url1'>Home</a></li>
                <li><a href='url2'>About</a></li>
                <li><a href='url3'>Menu</a></li>
                <li><a href='url4'>Reservations</a></li>
                <li><a href='url5'>Order Online</a></li>
                <li><a href='url6'>Login</a></li>
            </ul>
        </VStack>
        <VStack>
            <h2>Contact</h2>
            <ul>
                <li><a href='url2'>Address</a></li>
                <li><a href='url3'>Phone Number</a></li>
                <li><a href='url4'>Email</a></li>
            </ul>
        </VStack>
        <VStack>
            <h2>Social Media</h2>
            <ul>
                <li><a href='url1'>Facebook</a></li>
                <li><a href='url2'>Instagram</a></li>
                <li><a href='url4'>Website</a></li>
            </ul>
        </VStack>
        
            
    </HStack>
)
export default Footer;