import { combineReducers } from 'redux';

import results from './results.reducer';
import isLoadingResults from './is-loading-results.reducer';

export default combineReducers({ results, isLoadingResults });
