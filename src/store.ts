import { combineReducers, compose, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { reducer as cityReducer } from './RenderCall/duck';

/* tslint:disable */
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* tslint:enable */

const combined = combineReducers({
  city: cityReducer
});

export default createStore(combined, composeEnhancers(applyMiddleware(thunk)));
