import React from 'react'
import { Navigate } from 'react-router-dom'
import { ICheckUser } from '../types/data'

const CheckUser: React.FC<ICheckUser> = ({ children, auth, path }) => {
    return auth ? <Navigate to={path} /> : children
}

export default CheckUser