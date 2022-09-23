import React, { useState } from 'react'
import './user-list.css'
import Typegraphy from '@mui/material/Typography';
import { IUsersListProps } from '../../types/data';
import UserInfo from '../user/user';
import { Input } from '@mui/material';

const UserList: React.FC<IUsersListProps> = ({ title, users, titleBth, funcBth }) => {
    const [search, setSearch]: [string, (search: string) => void] = useState("")
    return (
        <Typegraphy component="div" className="Users-list">
            <Input
                placeholder='...Поиск по имени'
                onChange={event => { setSearch(event.target.value) }}
                className="Users-search"
            />
            <Typegraphy component="p" id='Users-list-title'>{title}</Typegraphy>
            <Typegraphy component="div">
                {
                    users.length > 0
                        ? users.filter((val) => {
                            if (val.name === "") {
                                return val
                            } else if (val.name.toLowerCase().includes(search.trim().toLowerCase())) {
                                return val
                            }
                            return false
                        }).map(user => (
                            <UserInfo
                                key={user.id}
                                title={titleBth}
                                funcBth={funcBth}
                                user={user} />

                        ))
                        : <Typegraphy component="p" className="User-warning">
                            Список пользователей пуст
                        </Typegraphy>
                }
            </Typegraphy>

        </Typegraphy>
    )
}

export default UserList