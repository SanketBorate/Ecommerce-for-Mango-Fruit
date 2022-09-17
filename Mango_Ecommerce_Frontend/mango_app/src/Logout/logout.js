import React from 'react'

import { useNavigate } from 'react-router';

import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


export default function Logout() {

    const navigate = useNavigate();


    const logoutUser = () => {
        // remove the logged users details from session storage
        // sessionStorage.removeItem('userId')
        // sessionStorage.removeItem('firstName')
        // sessionStorage.removeItem('lastName')
        // sessionStorage.removeItem('pincode')
        // sessionStorage.removeItem('state')
      
        sessionStorage.removeItem('token')

        // navigate to sign in component
        //window.document.reload();
        navigate('/')
        window.location.reload();
        
    }

    useEffect(() => { logoutUser() }, []);



    return (
        <div>
        </div >
    )

}
