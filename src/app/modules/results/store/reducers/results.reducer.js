import { handleActions } from 'redux-actions';

import { RESULTS_ACTIONS } from '../actions/results.actions';


const initialState = {};

export default handleActions(
  {
    [RESULTS_ACTIONS.FETCH_RESULTS_BY_QUERY]: () => initialState,
    [RESULTS_ACTIONS.FETCH_RESULTS_BY_QUERY_SUCCESS]: (state, { payload }) => {
      return !!payload ? {
        categories: payload.categories,
        items: payload.items
      } : state;
    },
  },
  initialState,
);
