import { useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/selectors';

export const useIsLoading = () => useSelector(selectIsLoading);
