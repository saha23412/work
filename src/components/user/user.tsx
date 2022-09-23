import React from 'react'
import {  IinfoUserProps } from '../../types/data'
import Typegraphy from '@mui/material/Typography';
import { Button } from '@mui/material';
import './user.css'

const UserInfo: React.FC<IinfoUserProps> = ({ user,title,funcBth}) => {
   

    return (
        <Typegraphy component="div" className="User">

            <Typegraphy className='User-info' component="p">Имя: {user.name}</Typegraphy>
            <Typegraphy  className='User-info' component="p">Возраст: {user.age}</Typegraphy>
            <Typegraphy className='User-info' component="p">Почта: {user.login}</Typegraphy>
            <Button id='User-addButton' onClick={()=>funcBth(user)}>{title}</Button>
        </Typegraphy>
    )
}

export default UserInfo