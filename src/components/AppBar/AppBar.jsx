import { useSelector } from 'react-redux';

import { Navigation } from 'components/AppBar/Navigation';
import { AuthNav } from './AuthNav';
import { UserMenu } from 'components/AppBar/UserMenu';
import { Header } from './AppBar.styled';

import { authSelectors } from '../../redux/auth/authSelectors';

export const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);

  return (
    <Header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};
