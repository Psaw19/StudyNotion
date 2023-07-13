import { endpoints } from "../apis";
import { apiconnector } from "../apiconnector";
import { toast } from "react-hot-toast";
import { setLoading, setToken } from "../../store/slices/authSlice";
import { setUser } from "../../store/slices/profileSlice";

const { SENDOTP_API, SIGNUP_API, LOGIN_API, RESETPASSTOKEN_API, RESETPASSWORD_API } = endpoints

export const sendOtp = (email, navigate) => {
    return async (dispatch) => {
        const toastId = toast.loading('Sending OTP')
        dispatch(setLoading(true));
        try {
            const response = await apiconnector('POST', SENDOTP_API, { email })
            console.log("SENDOTP API RESPONSE............", response)

            if (!response.data.success) {
                throw new Error(response.data.message)
            }

            toast.success('OTP sent successfully')
            navigate('/verify-email')
        } catch (error) {
            console.error(error.response.data.message)
            toast.error(error.response.data.message)
        } finally {
            toast.dismiss(toastId)
            dispatch(setLoading(false));
        }
    }
}

export const signUp = ({ firstName, lastName, email, password, confirmPassword, accountType }, otp, navigate) => {
    return async (dispatch) => {
        const toastId = toast.loading('loading...')
        dispatch(setLoading(true))
        try {
            const response = await apiconnector('POST', SIGNUP_API, {
                firstName,
                lastName,
                email,
                password,
                confirmPassword,
                otp,
                accountType
            })

            console.log("SIGNUP API RESPONSE............", response)
            if (!response.data.success) {
                throw new Error(response.data.message)
            }

            toast.success('User registered successfully')
            navigate('/login')

        } catch (error) {
            console.error(error)
            toast.error(error.response.data.message)
        } finally {
            toast.dismiss(toastId)
            dispatch(setLoading(false))
        }
    }
}

export const login = ({ email, password }, navigate) => {
    return async (dispatch) => {
        const toastId = toast.loading('loading...')
        dispatch(setLoading(true))
        try {
            const response = await apiconnector('POST', LOGIN_API, { email, password })
            console.log("LOGIN API RESPONSE............", response)

            if (!response.data.success) {
                throw new Error(response.data.message)
            }

            toast.success('Login success')
            // console.log(response.data.token)
            dispatch(setToken(response.data.token))
            dispatch(setUser(response.data.user))

            localStorage.setItem('token', JSON.stringify(response.data.token))
            localStorage.setItem('user', JSON.stringify(response.data.user))

            navigate('/dashboard/my-profile')

        } catch (error) {
            console.error(error.response.data.message)
            toast.error(error.response.data.message)
        } finally {
            toast.dismiss(toastId)
            dispatch(setLoading(false))
        }
    }
}

export const logout = (navigate) => {
    return async (dispatch) => {
        const toastId = toast.loading('Logging out...')
        dispatch(setLoading(true))
        try {

            dispatch(setToken(null))
            dispatch(setUser(null))
            localStorage.setItem('token', null)
            localStorage.setItem('user', null)

            toast.success('Logged out successfully')
            navigate('/login')

        } catch (error) {
            console.error(error)
            toast.error(error.response.data.message)

        } finally {
            toast.dismiss(toastId)
            dispatch(setLoading(false))
        }
    }
}

export const resetPassToken = (email, setEmailSent) => {
    return async (dispatch) => {
        const toastId = toast.loading('Sending mail to reset password');
        dispatch(setLoading(true));
        try {
            // console.log(email)
            const response = await apiconnector('POST', RESETPASSTOKEN_API, { email })
            console.log("RESET PASS TOKEN API RESPONSE............", response)

            if (!response.data.success) {
                throw new Error(response.data.message)
            }
            toast.success(response.data.message)
            setEmailSent(true);

        } catch (error) {
            console.error(error)
            toast.error(error.response.data.message)

        } finally {
            toast.dismiss(toastId)
            dispatch(setLoading(false))
        }

    }
}

export const updatePassword = (formData, token, setReset, setEmail) => {
    return async (dispatch) => {
        const toastId = toast.loading('Resetting Password');
        dispatch(setLoading(true))
        const { password, confirmPassword } = formData;
        try {

            const response = await apiconnector('POST', RESETPASSWORD_API, { password, confirmPassword, token })
            console.log("UPDATE PASSWORD API RESPONSE............", response)

            if (!response.data.success) {
                throw new Error(response.data.message)
            }
            setEmail(response.data.email);
            toast.success(response.data.message);
            setReset(true);
        } catch (error) {
            console.error(error)
            toast.error(error.response.data.message)

        } finally {
            toast.dismiss(toastId)
            dispatch(setLoading(false))
        }
    }
}