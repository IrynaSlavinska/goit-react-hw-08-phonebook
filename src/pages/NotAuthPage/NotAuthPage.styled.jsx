import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NotAuthContainer = styled.div`
  text-align: center;
  background-color: #1dacd6;
  padding: 20px;
  border-radius: 4px;
`;

export const Title = styled.h1`
  font-size: 60px;
`;

export const Text = styled.p`
  font-size: 18px;
`;

export const StyledLink = styled(NavLink)`
  color: #000000;
  font-size: 44px;
`;
