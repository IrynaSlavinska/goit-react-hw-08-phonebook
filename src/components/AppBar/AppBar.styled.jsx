import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
`;

export const NavigationMenu = styled.ul`
  display: flex;
  gap: 50px;
`;

export const NavItem = styled.li``;

export const StyledLink = styled(NavLink)`
  font-size: 20px;
  color: #000000;
  background-color: #1dacd6;
  padding: 8px;
  border-radius: 4px;

  &.active {
    color: #000000;
    background-color: #e9af3d;
    padding: 8px;
    border-radius: 4px;
  }
`;

export const UserMenuContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const UserGreeting = styled.p`
  font-size: 20px;
  color: #000000;
  background-color: #1dacd6;
  padding: 8px;
  border-radius: 4px;
`;

export const UserLogOut = styled.button`
  font-size: 20px;
  color: #000000;
  background-color: #e9af3d;
  padding: 8px;
  border-radius: 4px;
`;
