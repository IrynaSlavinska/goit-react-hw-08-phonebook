import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  width: 1400px;
  margin: 0 auto;
  padding: 10px;
`;

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
  background-color: #bfa89e;
  padding: 8px;
  border-radius: 4px;

  &.active {
    color: #ebf5ee;
    background-color: #8b786d;
    padding: 8px;
    border-radius: 4px;
  }
`;

export const Main = styled.main`
  padding: 32px;
`;
