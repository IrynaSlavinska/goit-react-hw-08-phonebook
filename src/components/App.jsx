import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import Layout from './Layout/Layout';
import { PrivateRoute } from '../routes/PrivateRoute';
// import { RestrictedRoute } from './RestrictedRoute';
import { useAuth } from '../hooks/useAuth';
import operations from '../redux/auth/authOperations';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const NotFound = lazy(() => import('pages/NotFound/NotFound'));
const NotAuthPage = lazy(() => import('pages/NotAuthPage/NotAuthPage'));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(operations.refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="unauthorized" element={<NotAuthPage />} />
        <Route
          path="/contacts"
          element={
            <PrivateRoute
              redirectTo="/unauthorized"
              component={<ContactsPage />}
            />
          }
        />

        <Route path="*" element={<NotFound to={'/'} />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
