import {
  SIGN_IN_USER,
} from 'context/auth/keys';

export const initialState = {
  authenticated: false,
  user: null,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGN_IN_USER:
      return {
        ...state,
        user: payload.user,
        authenticated: true,
      };
    default:
      return state;
  }
};

export default reducer;
