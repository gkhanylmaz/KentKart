import createDataContext from 'context/createDataContext';
import reducer, { initialState } from 'context/stop/reducer';
import * as actions from 'context/stop/actions';

export const { Context: StopContext, Provider: StopProvider } = createDataContext(
  reducer,
  { ...actions },
  initialState
);
