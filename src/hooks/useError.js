import { useSelector } from 'react-redux';
import { selectError } from 'redux/selectors';

export const useError = () => useSelector(selectError);
