import {
  NotAuthContainer,
  Title,
  Text,
  StyledLink,
} from './NotAuthPage.styled';

const NotAuthPage = () => {
  return (
    <NotAuthContainer>
      <Title>Unauthorized user</Title>
      <Text>You have profile</Text>
      <StyledLink to="login">Log in</StyledLink>
      <Text>Register now</Text>
      <StyledLink to="register">Register</StyledLink>
    </NotAuthContainer>
  );
};

export default NotAuthPage;
