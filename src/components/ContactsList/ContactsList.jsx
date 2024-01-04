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
import {
  List,
  Item,
  Container,
  Name,
  Number,
  DeleteContactBtn,
} from './ContactsList.styled';

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
      {isLoading && <p>Loading...</p>}
      {error && <p>Something went wrong!. Try again later</p>}
      <List>
        {visibleContacts.map(({ id, name, number, avatar }) => (
          <Item key={id}>
            {/* <RiContactsFill /> */}
            <img src={avatar} alt="avatar" width="52" />
            <Container>
              <Name>{name}</Name>
              <Number>{number}</Number>
            </Container>
            <DeleteContactBtn
              type="button"
              onClick={() => {
                dispatch(deleteContactAction(id));
              }}
            >
              <MdDelete />
            </DeleteContactBtn>
          </Item>
        ))}
      </List>
    </>
  );
};
