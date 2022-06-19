import {
  GET_STOPS,
} from 'context/stop/keys';

export const initialState = {
  stops: []
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_STOPS:
      return {
        ...state,
        stops: payload
      };
    default:
      return state;
  }
};

export default reducer;
