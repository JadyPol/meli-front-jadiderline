import { combineReducers } from 'redux';

import productDetail from './product-detail.reducer';
import isLoadingDetail from './is-loading-detail.reducer';

export default combineReducers({ productDetail, isLoadingDetail });
