import styled from '@emotion/styled';

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

export const NavItem = styled.li`
  font-size: 20px;
  background-color: #bfa89e;
  padding: 8px;
  border-radius: 4px;
  &: active {
    background-color: #8b786d;
  }
`;
