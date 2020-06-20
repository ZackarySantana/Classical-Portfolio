// Libraries
import { createStore } from 'redux';


const store = createStore(function () { }, loadFromLocalState());

function loadFromLocalState() {
	try {
		const serializedState = localStorage.getItem('store');
		if (serializedState === null) return undefined;
		return JSON.parse(serializedState);
	} catch (exception) {
		console.log(exception);
		return undefined;
	}
}

function saveToLocalStorage(state) {
	try {
		const serializedState = JSON.stringify(state);
		localStorage.setItem('store', serializedState);
	} catch (exception) {
		console.log(exception);
	}
}

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
