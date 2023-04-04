import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilterValue } from 'redux/selectors';
import {
  deleteContact,
  fetchContacts,
} from 'redux/contacts/contactsOperations';
import { DeleteBtn, List, ListItem } from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilterValue);

  useEffect(() => {
    if (contacts.length === 0) dispatch(fetchContacts());
  }, [dispatch, contacts.length]);

  const visibleContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <List>
      {visibleContacts &&
        visibleContacts.map(({ id, name, phone }) => {
          return (
            <ListItem key={id}>
              <p>{name}: </p>
              <p>{phone}</p>
              <DeleteBtn
                type="button"
                onClick={() => dispatch(deleteContact(id))}
              >
                Delete
              </DeleteBtn>
            </ListItem>
          );
        })}
    </List>
  );
};
