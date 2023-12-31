import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header, Navigation, NavItem, Container } from './Layout.styled';

const Layout = () => {
  return (
    <Container>
      <Header>
        <Navigation>
          <NavItem>
            <NavLink to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="register">Register</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="login">Log In</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="contacts">Contacts</NavLink>
          </NavItem>
        </Navigation>
      </Header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};

export default Layout;
