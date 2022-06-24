import { createAction } from 'redux-actions';

import { apiMLA } from '../../../../api/mla.api';

const FETCH_RESULTS_BY_QUERY = 'FETCH_RESULTS_BY_QUERY';
const FETCH_RESULTS_BY_QUERY_SUCCESS = 'FETCH_RESULTS_BY_QUERY_SUCCESS';

const fetchResultsByQueryEffect = ({ queryStringParams }) => async dispatch => {
  // dispatch fetchResultsByQueryAction
  dispatch(fetchResultsByQueryAction());
  // fetch search service
  fetch(`${apiMLA.search_by}/${queryStringParams}`)
    .then(res => res.json())
    .then((response) => {
      // set breadcrumbs in localStorage
      localStorage.setItem('breadcrumbs', JSON.stringify(response.categories))
      // dispatch fetchResultsByQuerySuccessAction
      dispatch(fetchResultsByQuerySuccessAction(response));
    })
    .catch()
};

const fetchResultsByQueryAction = createAction(FETCH_RESULTS_BY_QUERY);
const fetchResultsByQuerySuccessAction = createAction(FETCH_RESULTS_BY_QUERY_SUCCESS);

const RESULTS_ACTIONS = {
  FETCH_RESULTS_BY_QUERY,
  FETCH_RESULTS_BY_QUERY_SUCCESS,
  fetchResultsByQueryEffect
};

export { RESULTS_ACTIONS };