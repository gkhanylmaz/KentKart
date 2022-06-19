import {
  SIGN_IN_USER,
} from 'context/auth/keys';

import usersData from 'data/users.json';

export const signInUser = (dispatch) => async (data, navigate) => {
  const { userEmail, userPassword } = data;

  let valid = false;
  let user = {}
  usersData.forEach(el => {
    const { email, password } = el
    if (email === userEmail && password === userPassword) {
      user = el;
      return valid = true;
    }
    return;
  })
  if (valid) {
    dispatch({ type: SIGN_IN_USER, payload: { user } });
    navigate('/')
  }
};
