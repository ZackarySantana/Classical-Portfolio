// Libraries
import { createStore } from 'redux';

const store = createStore(
	function () { },
	{},
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
