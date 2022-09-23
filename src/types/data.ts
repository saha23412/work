export interface ISignInForm {

    login: string,
    password: string
}
export interface IAuthFormProps {
    errorsData?: string,
    session: boolean
}
export interface IHomeProps {
    user: User,
    session: boolean,
}
export interface ICheckUser {
    children: JSX.Element,
    auth: boolean,
    path: string
}
export interface IinfoUser {
    name: string,
    login: string,
    age: string | number,
    id: string | number,

}
export interface IinfoUserProps {
    user: User,
    title?: string
    funcBth:(user: User) => void,
}
export interface IProtectedProps {
    title?: string,
    users: User[] | [],
    friendsList: User[] | [],
    currentUser?: User,
    addUser: (user: User) => void,
    deleteUser: (user: User) => void,
}
export interface IUsersListProps {
    title: string,
    users: User[] | [],
    currentUser?: User,
    titleBth?: string,
    funcBth:(user: User) => void
}
export type User = {
    id: number | string,
    name: string,
    age: number | string,
    login: string,
    password: string,
}
export interface ISearchInput{
    search:string,
    setSearch:(value:string)=>void
}
export type UsersState = {
    list: User[];
    friendsList: User[];
    currentUser: User;
    loading: boolean;
    session: boolean;
    error: string | null;
}
export type RequireAuthProps = {
    children: JSX.Element,
    session: boolean,
}