import {
  ErrorTitle,
  ErrorContainer,
  Text,
  StyledLink,
} from './NotFound.styled';

const NotFound = () => {
  return (
    <ErrorContainer>
      <ErrorTitle>Error 404</ErrorTitle>
      <Text>You have gone to a non existing page</Text>
      <Text>Return to the</Text>
      <StyledLink to="/">Home</StyledLink>
    </ErrorContainer>
  );
};

export default NotFound;
