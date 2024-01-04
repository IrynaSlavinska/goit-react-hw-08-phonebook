import {
  NavigationMenu,
  NavItem,
  StyledLink,
} from 'components/AppBar/AppBar.styled';

export const AuthNav = () => {
  return (
    <NavigationMenu>
      <NavItem>
        <StyledLink to="register">Register</StyledLink>
      </NavItem>
      <NavItem>
        <StyledLink to="login">Log In</StyledLink>
      </NavItem>
    </NavigationMenu>
  );
};
