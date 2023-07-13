import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

const PrivateRoute = ({ children }) => {

    const { token } = useSelector((state) => state.auth)

    if (token !== null) {
        console.log('This is a private route')
        return children
    } else {
        return <Navigate to={'/login'} />
    }
}

export default PrivateRoute