import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Notiflix from 'notiflix';

import { selectContacts } from '../../redux/selectors';
import { addContactAction } from '../../redux/contacts/contactsOperations';

import {
  Form,
  Label,
  Input,
  SubmitButton,
  // Group,
  // RadioContainer,
  // RaioDiv,
  // RadioInput,
} from './ContactForm.styled';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const isExist = contacts.some(contact => contact.name === name);
    if (isExist) {
      Notiflix.Notify.warning(`${name} is already in your phonebook`);
      return;
    }
    dispatch(addContactAction({ name, number }));
    setName('');
    setNumber('');
  };

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          required
          placeholder="Enter name"
          onChange={handleChange}
        />
      </Label>

      <Label>
        Number
        <Input
          type="tel"
          name="number"
          required
          placeholder="Enter number"
          onChange={handleChange}
        />
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
