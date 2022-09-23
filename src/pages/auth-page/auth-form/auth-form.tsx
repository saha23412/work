import React from 'react'
import './auth-form.css'
import Typegraphy from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { useForm, Controller, SubmitHandler, useFormState } from 'react-hook-form'
import { loginValidation, passwordValidation } from './validation'
import { useAppDispatch } from '../../../hook/hook'
import { loginUser } from '../../../store/slice/usersSlice'
import { ISignInForm } from '../../../types/data'
import { IAuthFormProps } from '../../../types/data'
import CheckUser from '../../../hook/check-user'
const AuthForm: React.FC<IAuthFormProps> = ({ errorsData, session }) => {
    const { handleSubmit, control } = useForm<ISignInForm>({
        mode: 'onSubmit',
        defaultValues: {
            login: '',
            password: ''
        }
    })
    const { errors } = useFormState({
        control
    })

    const dispatch = useAppDispatch()
    const onSubmit: SubmitHandler<ISignInForm> = (data, event) => {
        event?.preventDefault()
        dispatch(loginUser(data))


    };
    return (
        <CheckUser auth={session} path='/protected'>

            <div className='Auth-form'>
                <Typegraphy variant='h4' component="div" className="Auth-form-title">
                    Войдите
                </Typegraphy>
                <Typegraphy variant='subtitle1' component="div" gutterBottom={true} className="Auth-form-subtitle">
                    Для доступа к списку контактов
                </Typegraphy>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                        control={control}
                        name='login'
                        rules={loginValidation}
                        render={({ field }) => {
                            return (
                                <TextField
                                    label='Логин'
                                    size='small'
                                    margin='normal'
                                    className='auth-form-input'
                                    fullWidth={true}
                                    onChange={(e) => field.onChange(e)}
                                    value={field.value}
                                    error={!!errors.login?.message}
                                    helperText={errors.login?.message}
                                />
                            )
                        }}
                    />
                    <Controller
                        control={control}
                        name='password'
                        rules={passwordValidation}
                        render={({ field }) => {
                            return (
                                <TextField
                                    label='Пароль'
                                    type="password"
                                    size='small'
                                    margin='normal'
                                    className='auth-form-input'
                                    fullWidth={true}
                                    onChange={(e) => field.onChange(e)}
                                    value={field.value}
                                    error={!!errors.password?.message}
                                    helperText={errors.password?.message}
                                />
                            )

                        }}
                    />

                    <Button
                        type='submit'
                        variant='contained'
                        fullWidth={true}
                        sx={{
                            marginTop: 2
                        }}
                    >
                        Войти
                    </Button>
                    {
                        errorsData
                            ? <Typegraphy component="p" sx={{ marginTop: 2, color: 'red', textAlign: 'center' }}>
                                {errorsData}
                            </Typegraphy>
                            : null
                    }
                </form>
            </div>
        </CheckUser>

    )
}

export default AuthForm