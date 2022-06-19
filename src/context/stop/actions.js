import {
  GET_STOPS,
} from 'context/stop/keys';

import stopsData from 'data/stops.json';

export const getStops = (dispatch) => async (callback) => {
  callback(stopsData);
  dispatch({ type: GET_STOPS, payload: stopsData });
};
