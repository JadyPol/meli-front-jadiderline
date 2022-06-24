import { handleActions } from 'redux-actions';

import { PRODUCT_DETAIL_ACTIONS } from '../actions/product-detail.actions';

const initialState = true;

export default handleActions(
  {
    [PRODUCT_DETAIL_ACTIONS.FETCH_PRODUCT_DETAIL]: () => initialState,
    [PRODUCT_DETAIL_ACTIONS.FETCH_PRODUCT_DETAIL_SUCCESS]: () => false,
  },
  initialState,
);
