import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const OpenRoute = ({ children }) => {
    const { token } = useSelector((state) => state.auth)

    if (token === null) {
        console.log('*************************************')
        console.log('*         INSIDE OPEN ROUTE         *')
        console.log('*************************************')
        return children
    } else {
        return <Navigate to={'/dashboard/my-profile'} />
    }
}

export default OpenRoute