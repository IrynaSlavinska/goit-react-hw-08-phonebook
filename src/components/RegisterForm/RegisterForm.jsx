import { Form, Label, Input, SubmitButton } from './RegisterForm.styled';

export const RegisterForm = () => {
  return (
    <Form>
      <Label>
        Username
        <Input type="text" name="text" />
      </Label>
      <Label>
        Email
        <Input type="email" name="email" />
      </Label>
      <Label>
        Password
        <Input type="password" name="password" />
      </Label>
      <SubmitButton type="submit">Register</SubmitButton>
    </Form>
  );
};
