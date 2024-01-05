import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Container } from 'components/ContactsList/ContactsList.styled';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { HourglassLoader } from 'components/Loader/Loader';

import { getAllContactsAction } from '../../redux/contacts/contactsOperations';
import { selectIsLoading } from '../../redux/selectors';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getAllContactsAction());
  }, [dispatch]);

  return (
    <Container>
      {isLoading && <HourglassLoader />}
      <ContactForm />
      <Filter />
      <ContactsList />
    </Container>
  );
};

export default ContactsPage;
