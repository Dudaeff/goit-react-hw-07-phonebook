import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';
import { Label } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterInput = evt => {
    dispatch(filterContacts(evt.currentTarget.value));
  };

  return (
    <Label>
      Find contacts by name
      <input type="text" onChange={handleFilterInput} />
    </Label>
  );
};
