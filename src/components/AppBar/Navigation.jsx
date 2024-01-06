import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth/authSelectors';

import {
  NavigationMenu,
  NavItem,
  StyledLink,
} from 'components/AppBar/AppBar.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);

  return (
    <NavigationMenu>
      <NavItem>
        <StyledLink to="/">Home</StyledLink>
      </NavItem>

      {isLoggedIn && (
        <NavItem>
          <StyledLink to="contacts">Contacts</StyledLink>
        </NavItem>
      )}
    </NavigationMenu>
  );
};
