import { handleActions } from 'redux-actions';

import { RESULTS_ACTIONS } from '../actions/results.actions';

const initialState = true;

export default handleActions(
  {
    [RESULTS_ACTIONS.FETCH_RESULTS_BY_QUERY]: () => initialState,
    [RESULTS_ACTIONS.FETCH_RESULTS_BY_QUERY_SUCCESS]: () => false,
  },
  initialState,
);
