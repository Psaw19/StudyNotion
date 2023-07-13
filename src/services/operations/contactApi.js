import { apiconnector } from "../apiconnector";
import { toast } from "react-hot-toast";
import { contactapi } from "../apis";

export const contact = ({ firstName, lastName, email, phoneNumber, countryCode, message }) => {
    return async (dispatch) => {
        const toastId = toast.loading('Submitting Response')
        try {
            const response = await apiconnector('POST', contactapi.CONTACTUS_API, { email, firstName, lastName, message, phoneNumber, countryCode })

            if (!response.data.success) {
                throw new Error(response.data.message)
            }
            toast.success('Response Submitted')
        } catch (error) {
            toast.error(error.message)
            console.error(error)
        } finally {
            toast.dismiss(toastId)
        }

    }
}