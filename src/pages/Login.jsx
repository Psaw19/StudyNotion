import React from 'react'
import Template from '../components/core/Auth/Template'
import loginImage from '../assets/Images/login.webp'

const Login = () => {
    console.log('Inside login')
    return (
        <Template
            heading={'Welcome Back'}
            description1={'Build skills for today, tomorrow, and beyond.'}
            description2={'Education to future-proof your career.'}
            image={loginImage}
            formType={'login'}
        />
    )
}

export default Login