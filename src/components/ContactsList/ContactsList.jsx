import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import {
  selectContacts,
  selectFilterValue,
  selectError,
  selectIsLoading,
} from '../../redux/selectors';
import {
  getAllContactsAction,
  deleteContactAction,
} from '../../redux/contacts/contactsOperations';

import { MdDelete } from 'react-icons/md';
import { IoIosContacts } from 'react-icons/io';
import { IconContext } from 'react-icons';

import {
  List,
  Item,
  Container,
  ContactData,
  DeleteContactBtn,
} from './ContactsList.styled';

import { HourglassLoader } from 'components/Loader/Loader';

export const ContactsList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilterValue);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllContactsAction());
  }, [dispatch]);

  const getFilteredContacts = () => {
    if (filter.filter === '') return;
    const normilezedFilter = filter.toLowerCase().trim();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normilezedFilter)
    );

    return visibleContacts;
  };

  const visibleContacts = getFilteredContacts();

  return (
    <>
      {error && <p>Something went wrong!. Try again later</p>}
      {visibleContacts.length > 0 && (
        <List>
          {visibleContacts.map(({ id, name, number, group }) => (
            <Item key={id}>
              <IconContext.Provider value={{ color: '#283044', size: 40 }}>
                <IoIosContacts />
              </IconContext.Provider>
              <Container>
                <ContactData>{name}</ContactData>
                <ContactData>{number}</ContactData>
                <ContactData>{group}</ContactData>
              </Container>
              <DeleteContactBtn
                type="button"
                onClick={() => {
                  dispatch(deleteContactAction(id));
                }}
              >
                <IconContext.Provider value={{ color: '#283044', size: 40 }}>
                  <MdDelete />
                </IconContext.Provider>
              </DeleteContactBtn>
            </Item>
          ))}
        </List>
      )}
      {isLoading && <HourglassLoader />}
    </>
  );
};
