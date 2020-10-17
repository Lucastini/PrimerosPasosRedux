import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducers from './Reducers/rootReducers';



const store = createStore(rootReducers, composeWithDevTools());

export default store