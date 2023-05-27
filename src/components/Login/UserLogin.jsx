import React from 'react'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import { Button } from 'bootstrap';

const UserLogin = () => {
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
    const initialvalues = {
        mobileno: '',
        otp: ''
    }
    return (
        <>
            <Card className='card'>
                
            </Card>
        </>
    )
}

export default UserLogin