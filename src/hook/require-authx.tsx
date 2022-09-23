import React from 'react'
import { RequireAuthProps } from '../types/data'
import { useLocation, Navigate } from 'react-router-dom';


const RequireAuth: React.FC<RequireAuthProps> = ({ session, children }) => {

    const location = useLocation()
    if (!session) {
        return <Navigate to='/' state={{ from: location }} replace />
    }
    return children
}

export default RequireAuth