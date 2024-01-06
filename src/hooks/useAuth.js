import { useSelector } from 'react-redux';
import { authSelectors } from '../redux/auth/authSelectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  const user = useSelector(authSelectors.selectUserName);

  return {
    isLoggedIn,
    user,
  };
};
