import { handleActions } from 'redux-actions';

import { PRODUCT_DETAIL_ACTIONS } from '../actions/product-detail.actions';


const initialState = {};

export default handleActions(
  {
    [PRODUCT_DETAIL_ACTIONS.FETCH_PRODUCT_DETAIL]: () => initialState,
    [PRODUCT_DETAIL_ACTIONS.FETCH_PRODUCT_DETAIL_SUCCESS]: (state, { payload }) => !!payload ? {
      item: payload.item,
      categories: payload.categories
    } : state,
  },
  initialState,
);
