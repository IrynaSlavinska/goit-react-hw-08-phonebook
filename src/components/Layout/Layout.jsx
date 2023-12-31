import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import {
  Container,
  Header,
  Navigation,
  NavItem,
  StyledLink,
  Main,
} from './Layout.styled';

const Layout = () => {
  return (
    <Container>
      <Header>
        <Navigation>
          <NavItem>
            <StyledLink to="/">Home</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to="register">Register</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to="login">Log In</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to="contacts">Contacts</StyledLink>
          </NavItem>
        </Navigation>
      </Header>

      <Main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Main>
    </Container>
  );
};

export default Layout;
