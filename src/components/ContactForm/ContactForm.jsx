import {
  Form,
  Label,
  Input,
  SubmitButton,
  Group,
  RadioContainer,
  RaioDiv,
  RadioInput,
} from './ContactForm.styled';

export const ContactForm = () => {
  return (
    <Form>
      <Label>
        Name
        <Input type="text" name="name" required placeholder="Enter name" />
      </Label>

      <Label>
        Number
        <Input type="tel" name="number" required placeholder="Enter number" />
      </Label>

      {/* <Group>Group</Group>
      <RadioContainer>
        <RaioDiv>
          Family
          <RadioInput type="radio" name="group" value="family" />
        </RaioDiv>

        <RaioDiv>
          Friends
          <RadioInput type="radio" name="group" value="friends" />
        </RaioDiv>

        <RaioDiv>
          Work
          <RadioInput type="radio" name="group" value="work" />
        </RaioDiv>

        <RaioDiv>
          Others
          <RadioInput type="radio" name="group" value="others" checked />
        </RaioDiv>
      </RadioContainer> */}

      <SubmitButton type="submit">Add contact</SubmitButton>
    </Form>
  );
};
