// #3 Import createStore and the reducer, and create the store
import { createStore }from 'redux';
import reducer from './reducer';

export default createStore(reducer);