import { createAction } from 'redux-actions';

import { apiMLA } from '../../../../api/mla.api';

const FETCH_PRODUCT_DETAIL = 'FETCH_PRODUCT_DETAIL';
const FETCH_PRODUCT_DETAIL_SUCCESS = 'FETCH_PRODUCT_DETAIL_SUCCESS';

const fetchProductDetailEffect = ({ productId }) => async dispatch => {
  // dispatch fetchProductDetailAction
  dispatch(fetchProductDetailAction());
  // fetch details service
  fetch(`${apiMLA.fetch_detail}/${productId}`)
    .then(res => res.json())
    .then((response) => {
      if (!!response.item) {
        // dispatch fetchProductDetailSuccessAction and use breadcrumbs in localstorage as categories
        dispatch(fetchProductDetailSuccessAction({
          ...response,
          categories: JSON.parse(localStorage.getItem('breadcrumbs'))
        }));
      }
    })
    .catch()
};

const fetchProductDetailAction = createAction(FETCH_PRODUCT_DETAIL);
const fetchProductDetailSuccessAction = createAction(FETCH_PRODUCT_DETAIL_SUCCESS);

const PRODUCT_DETAIL_ACTIONS = {
  FETCH_PRODUCT_DETAIL,
  FETCH_PRODUCT_DETAIL_SUCCESS,
  fetchProductDetailEffect
};

export { PRODUCT_DETAIL_ACTIONS };