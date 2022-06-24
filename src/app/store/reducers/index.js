import { combineReducers } from 'redux';

import productDetailModule from '../../modules/product-detail/store/reducers/index.js';
import resultsModule from '../../modules/results/store/reducers/index.js';

export default combineReducers({ productDetailModule, resultsModule });
