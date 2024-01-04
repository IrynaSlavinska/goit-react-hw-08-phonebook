import { useDispatch } from 'react-redux';
import operations from '../../redux/auth/authOperations';
import { Form, Label, Input, SubmitButton } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      operations.register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Username
        <Input type="text" name="name" placeholder="Enter your name" required />
      </Label>
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
        <Input
          type="password"
          name="password"
          placeholder="Min 7 symbols"
          required
        />
      </Label>
      <SubmitButton type="submit">Register</SubmitButton>
    </Form>
  );
};
