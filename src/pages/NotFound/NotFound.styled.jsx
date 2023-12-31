import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const ErrorContainer = styled.div`
  text-align: center;
  background-color: #78a1bb;
  padding: 20px;
  border-radius: 4px;
`;

export const ErrorTitle = styled.h1`
  font-size: 60px;
`;

export const Text = styled.p`
  font-size: 18px;
`;

export const StyledLink = styled(NavLink)`
  color: #000000;
  font-size: 44px;
`;
