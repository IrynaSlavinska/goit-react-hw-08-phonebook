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
  Group,
  RadioContainer,
  RadioInput,
} from './ContactForm.styled';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [group, setGroup] = useState('others');
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(addContactAction({ name, number, group }));
    const isExist = contacts.some(contact => contact.name === name);
    if (isExist) {
      Notiflix.Notify.warning(`${name} is already in your phonebook`);
      return;
    }
    form.reset();
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
      case 'group':
        setGroup(value);
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

      <Group>Group</Group>
      <RadioContainer>
        <label>
          Family
          <RadioInput
            type="radio"
            name="group"
            value="family"
            onChange={handleChange}
            checked={group === 'family'}
          />
        </label>

        <label>
          Friends
          <RadioInput
            type="radio"
            name="group"
            value="friends"
            onChange={handleChange}
            checked={group === 'friends'}
          />
        </label>

        <label>
          Work
          <RadioInput
            type="radio"
            name="group"
            value="work"
            onChange={handleChange}
            checked={group === 'work'}
          />
        </label>

        <label>
          Others
          <RadioInput
            type="radio"
            name="group"
            value="others"
            onChange={handleChange}
            checked={group === 'others'}
          />
        </label>
      </RadioContainer>

      <SubmitButton type="submit">Add contact</SubmitButton>
    </Form>
  );
};
