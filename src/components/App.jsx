import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import Layout from './Layout/Layout';
import { PrivateRoute } from '../routes/PrivateRoute';
import { PublicRoute } from '../routes/PublicRoute';
import { useAuth } from '../hooks/useAuth';
import operations from '../redux/auth/authOperations';

import { HourglassLoader } from './Loader/Loader';

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
    <HourglassLoader />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />

        <Route
          path="register"
          element={<PublicRoute component={<RegisterPage />} />}
        />
        <Route
          path="login"
          element={<PublicRoute component={<LoginPage />} />}
        />
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
