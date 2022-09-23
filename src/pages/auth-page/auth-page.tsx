import React from 'react'
import './auth-page.css'
import AuthForm from './auth-form/auth-form'
import { useAppSelector } from '../../hook/hook'
const AuthPage: React.FC = () => {
    const selectRedux = useAppSelector(state => ({
        errorsData: state.users.error,
        session: state.users.session,

    }))

    return (
        <AuthForm session={selectRedux.session} errorsData={selectRedux.errorsData || ''} />
    )
}

export default AuthPage