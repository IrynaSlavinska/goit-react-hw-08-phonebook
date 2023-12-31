import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './Layout/Layout';
import ContactsPage from 'pages/ContactsPage/ContactsPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import NotFound from 'pages/NotFound/NotFound';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="contacts" element={<ContactsPage />} />

        <Route path="*" element={<NotFound to={'/'} />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
