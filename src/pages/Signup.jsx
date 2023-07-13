import React from 'react'
import SignUpPageImage from '../assets/Images/signup.webp'
import Template from '../components/core/Auth/Template'

const Signup = () => {

    return (
        <Template
            heading={'Join the millions learning to code with StudyNotion for free'}
            description1={'Build skills for today, tomorrow, and beyond.'}
            description2={'Education to future-proof your career.'}
            image={SignUpPageImage}
            formType={'signup'}
        />
    )
}

export default Signup