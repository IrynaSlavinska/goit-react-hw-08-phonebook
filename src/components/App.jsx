import { Routes, Route } from 'react-router-dom';
// import { lazy } from 'react';
import { lazy } from 'react';

import Layout from './Layout/Layout';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import ContactsPage from 'pages/ContactsPage';
import NotFound from 'pages/NotFound';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));

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
