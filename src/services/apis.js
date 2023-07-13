const BASE_URL = process.env.REACT_APP_BASE_URL

export const endpoints = {
    SIGNUP_API: BASE_URL + '/auth/signup',
    SENDOTP_API: BASE_URL + '/auth/sendotp',
    LOGIN_API: BASE_URL + '/auth/login',
    RESETPASSTOKEN_API: BASE_URL + '/auth/reset-password-token',
    RESETPASSWORD_API: BASE_URL + '/auth/reset-password',
}

export const categories = {
    CATEGORIES_API: BASE_URL + '/course/showAllCategories'
}

export const contactapi = {
    CONTACTUS_API: BASE_URL + '/contact'
}