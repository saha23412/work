import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { ISignInForm } from './../../types/data';
import { UsersState, User } from './../../types/data';
const initialState: UsersState = {
    list: [],
    friendsList: [],
    currentUser: {
        id: '',
        name: '',
        age: '',
        login: '',
        password: ''
    },
    loading: false,
    session: false,
    error: '',

}
export const fetchUsers = createAsyncThunk<User[], string | undefined | number, { rejectValue: string }>(
    'users/fetchUsers',
    async function (id, { rejectWithValue }) {
        const response = await fetch('http://localhost:3001/users')
        if (!response.ok) {
            return rejectWithValue('Ошибка сервера!')
        }
        const data = await response.json()
        if (Array.isArray(data) && id) {
            return data.filter(user => user.id !== id) as User[]
        }
        return data as User[]

    }
)

export const loginUser = createAsyncThunk<void, ISignInForm, { rejectValue: string }>(
    'users/loginUser',
    async function (user, { rejectWithValue, dispatch }) {
        const users = await dispatch(fetchUsers())
        const { login, password } = user
        if (Array.isArray(users.payload)) {
            const verifiedUser = users.payload.filter(checkUser => (
                checkUser.login === login && checkUser.password === password
            ))
            if (verifiedUser && verifiedUser.length > 0) {
                const usersCheck = verifiedUser[0]
                dispatch(addCurrentUser(usersCheck))
            } else {
                dispatch(errorAcces('Пользователя не существует,проверьте введенные данные'))
            }
        } else {
            dispatch(errorAcces('Ошибка на сервере,повторите попытку'))
        }
    }
)
const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addCurrentUser(state, action: PayloadAction<User>): void {
            state.currentUser = action.payload
            state.session = true
            state.error = ''
        },
        errorAcces(state, action: PayloadAction<string>): void {
            state.error = action.payload

        },
        addFriendsList(state, action: PayloadAction<User>): void {
            const users = state.friendsList
            const addUser = action.payload
            if (!(users.find(user => user.id === addUser.id))) {
                state.friendsList.push(addUser)
            }
        },
        deleteFriendsList(state, action: PayloadAction<User>): void {
            const deleteUser = action.payload
            state.friendsList = state.friendsList.filter(friend => friend.id !== deleteUser.id)
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state, action) => {
                state.loading = true;
                state.error = '';
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.list = action.payload
                state.loading = false
            })
    }
})
export const { addCurrentUser, errorAcces, addFriendsList, deleteFriendsList } = usersSlice.actions
export default usersSlice.reducer