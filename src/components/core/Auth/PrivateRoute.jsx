import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

const PrivateRoute = ({ children }) => {

    const { token } = useSelector((state) => state.auth)

    if (token !== null) {
        console.log('************************************')
        console.log('*       INSIDE PRIVATE ROUTE       *')
        console.log('************************************')
        return children
    } else {
        return <Navigate to={'/login'} />
    }
}

export default PrivateRoute