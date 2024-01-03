import { Header, Navigation, NavItem, StyledLink } from './AppBar.styled';

export const AppBar = () => {
  return (
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
  );
};
