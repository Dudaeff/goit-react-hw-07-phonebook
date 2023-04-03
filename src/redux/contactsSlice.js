import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = [
  { id: 1, name: 'bot_1', number: 12345678 },
  { id: 2, name: 'bot_2', number: 12345678 },
  { id: 3, name: 'bot_3', number: 12345678 },
  { id: 4, name: 'bot_4', number: 12345678 },
  { id: 5, name: 'bot_5', number: 12345678 },
];

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare({ name, number }) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
