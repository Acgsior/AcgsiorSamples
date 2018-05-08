import { combineReducers, compose, createStore } from 'redux';
import { reducer as cityReducer } from './RenderCall/cityDuck';

/* tslint:disable */
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* tslint:enable */

const combined = combineReducers({
  city: cityReducer
});
export default createStore(combined, composeEnhancers());
