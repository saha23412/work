import React from 'react';
import { useAppSelector } from './hook/hook';
import AuthPage from './pages/auth-page/auth-page';
import { Routes, Route } from 'react-router-dom'
import RequireAuth from './hook/require-authx';
import ProtectedUserList from './components/protecte-user-list/protecte-user-list';
const App: React.FC = () => {

  const session = useAppSelector(state => state.users.session)
  return (
    <Routes>
      <Route path='/' element={<AuthPage />} />

      <Route path='/protected' element={
        <RequireAuth session={session}>
          <ProtectedUserList />
        </RequireAuth>
      } />

    </Routes>
  );
}

export default App;
