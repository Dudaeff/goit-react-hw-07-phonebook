import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useContacts } from 'hooks';
import { useVisibleContacts } from 'hooks';
import { deleteContact, fetchContacts } from 'redux/contacts';
import { DeleteBtn, List, ListItem } from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useContacts();
  const visibleContacts = useVisibleContacts();

  useEffect(() => {
    if (contacts.length === 0) dispatch(fetchContacts());
  }, [dispatch, contacts.length]);

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
