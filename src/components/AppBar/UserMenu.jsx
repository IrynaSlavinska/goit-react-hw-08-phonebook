import { useDispatch, useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth/authSelectors';
import operations from '../../redux/auth/authOperations';

import { IconContext } from 'react-icons';
import { FaUser } from 'react-icons/fa';

import {
  UserMenuContainer,
  UserGreeting,
  UserLogOut,
} from 'components/AppBar/AppBar.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.selectUserName);

  return (
    <UserMenuContainer>
      <IconContext.Provider value={{ color: ' #1dacd6', size: 40 }}>
        <FaUser />
      </IconContext.Provider>
      <UserGreeting>Welcome, {name}</UserGreeting>
      <UserLogOut type="button" onClick={() => dispatch(operations.logOut())}>
        Log Out
      </UserLogOut>
    </UserMenuContainer>
  );
};
