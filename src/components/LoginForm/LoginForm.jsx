import { Form, Label, Input, SubmitButton } from './LoginForm.styled';

export const LoginForm = () => {
  return (
    <Form>
      <Label>
        Email
        <Input type="email" name="email" />
      </Label>
      <Label>
        Password
        <Input type="password" name="password" />
      </Label>
      <SubmitButton type="submit">Log In</SubmitButton>
    </Form>
  );
};
