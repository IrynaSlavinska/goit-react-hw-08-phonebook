import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  margin-bottom: 20px;
`;

export const Navigation = styled.ul`
  display: flex;
  gap: 50px;
`;

export const NavItem = styled.li``;

export const StyledLink = styled(NavLink)`
  font-size: 20px;
  color: #000000;
  background-color: #78a1bb;
  padding: 8px;
  border-radius: 4px;

  &.active {
    color: #000000;
    background-color: #e9af3d;
    padding: 8px;
    border-radius: 4px;
  }
`;
