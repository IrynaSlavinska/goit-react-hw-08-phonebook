import { useDispatch } from 'react-redux';
import operations from '../../redux/auth/authOperations';
import { Form, Label, Input, SubmitButton } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      operations.logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Email
        <Input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
        />
      </Label>
      <Label>
        Password
        <Input type="password" name="password" required />
      </Label>
      <SubmitButton type="submit">Log In</SubmitButton>
    </Form>
  );
};
