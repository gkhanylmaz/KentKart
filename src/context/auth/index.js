import createDataContext from 'context/createDataContext';
import reducer, { initialState } from 'context/auth/reducer';
import * as actions from 'context/auth/actions';

export const { Context: AuthContext, Provider: AuthProvider } = createDataContext(
  reducer,
  { ...actions },
  initialState
);
