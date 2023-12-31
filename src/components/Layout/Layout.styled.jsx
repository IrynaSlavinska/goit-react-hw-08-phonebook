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

export const Main = styled.main`
  background-image: url(https://images.pexels.com/photos/949587/pexels-photo-949587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin: 0 auto;
  max-width: 1400px;
  height: 80vh;
  padding: 30px;

  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
