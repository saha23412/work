import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hook/hook'
import ProtectedPage from '../../pages/protected-page/protected-page'
import { addFriendsList, deleteFriendsList, fetchUsers } from '../../store/slice/usersSlice'
import { User } from '../../types/data'

const ProtectedUserList: React.FC = () => {
    const selectRedux = useAppSelector(state => ({
        users: state.users.list,
        friendsList: state.users.friendsList,
        currentUser: state.users.currentUser,
    }))
    const dispatch = useAppDispatch()
    const addUser = (user: User) => {
        dispatch(addFriendsList(user))
    }
    const deleteUser = (user: User) => {
        dispatch(deleteFriendsList(user))
    }
    useEffect(() => {
        dispatch(fetchUsers(selectRedux.currentUser.id))
    }, [dispatch, selectRedux.currentUser.id])
    return (
        <ProtectedPage
            users={selectRedux.users}
            friendsList={selectRedux.friendsList}
            currentUser={selectRedux.currentUser}
            addUser={addUser}
            deleteUser={deleteUser}
        />
    )
}

export default ProtectedUserList