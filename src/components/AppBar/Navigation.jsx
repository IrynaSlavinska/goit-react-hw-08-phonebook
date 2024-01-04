import {
  NavigationMenu,
  NavItem,
  StyledLink,
} from 'components/AppBar/AppBar.styled';

export const Navigation = () => {
  return (
    <NavigationMenu>
      <NavItem>
        <StyledLink to="/">Home</StyledLink>
      </NavItem>

      <NavItem>
        <StyledLink to="contacts">Contacts</StyledLink>
      </NavItem>
    </NavigationMenu>
  );
};
