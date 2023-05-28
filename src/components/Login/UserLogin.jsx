// import React from 'react'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Link, useRouteError } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import { Button } from 'bootstrap';

import React, { useState } from "react";
// import { useRouter } from "next/router";

const UserLogin = () => {
        const [phone, setPhone] = useState("");
        const [otp, setOtp] = useState("");
        const router = useRouteError();

        const handleSubmit = () => {
            if (phone === "" || otp === "") {
                return;
            }

            // TODO: Send the phone number and otp to your backend server

            router.push("/home");
        };

        return (
            <div>
                <section>
                    <h1>Login</h1>

                    <input
                        type="text"
                        placeholder="Phone Number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />

                    <button onClick={handleSubmit}>Get OTP</button>
                </section>

                <section style={{ display: phone ? "block" : "none" }}>
                    <h1>Verify OTP</h1>

                    <input
                        type="text"
                        placeholder="OTP"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                    />

                    <button onClick={handleSubmit}>Verify</button>
                </section>
            </div>
        );
    };

export default UserLogin;



    // const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
    // const initialvalues = {
    //     mobileno: '',
    //     otp: ''
    // }

    // const validation = Yup.object({
    //     mobileno: Yup.string().matches(phoneRegExp,"Phone Number not valid")
    //     .typeError("That doesn't look like a phone number")
    //     .positive("A phone number can't start with a minus")
    //     .integer("A phone number can't include a decimal point")
    //     .min(10)
    //     .required('A phone number is required'),
    //     otp: Yup.string().required('Enter OTP')
    //     .min(6)
    //     .max(6)
    // })

    // const onsubmit = values => {
    //     console.log('Form Data', values)
    // }
    // return (
    //     <>
    //         <Card className='card'>
    //             <Formik initialValues={initialvalues} validationSchema={validation} onSubmit={onsubmit}>
    //                 {
    //                     formik => {
    //                         return <Form>
    //                             <FormikControl 
    //                             control='input'
    //                             type='tel'
    //                             label='Phone No.'
    //                             name='Phoneno'
    //                             />
    //                             <FormikControl 
    //                             control='input'
    //                             type='password'
    //                             label='Password'
    //                             name='Password'
    //                             />

    //                             <button type='submit' disabled={formik.isValid}></button>
    //                         </Form>
    //                     }
    //                 }
    //             </Formik>
    //         </Card>
    //     </>
    // )
