import React from 'react'
import { IProtectedProps } from '../../types/data'
import Typegraphy from '@mui/material/Typography';
import UserList from '../../components/user-list/user-list';
import './protected-page.css'
const ProtectedPage: React.FC<IProtectedProps> = ({ users, currentUser, friendsList, deleteUser, addUser }) => {


  return (
    <Typegraphy component="div" className="Protected-list">
      <Typegraphy component="div" className="Protected-list-wrapper">
        <UserList title="Список всех пользователей" titleBth="+" funcBth={addUser} users={users} currentUser={currentUser} />
        <UserList title="Список ваших контактов" titleBth="-" funcBth={deleteUser} users={friendsList} />

      </Typegraphy>
    </Typegraphy>
  )
}

export default ProtectedPage