import { useMemo } from "react"
import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunkMiddleware from "redux-thunk"

import { persistedReducer } from "./appReducer"

let store

function makeStore(initialState) {
	return createStore(
		persistedReducer,
		initialState,
		composeWithDevTools(applyMiddleware(thunkMiddleware))
	)
}

export const initializeStore = (preloadedState) => {
	let _store = store ?? makeStore(preloadedState)

	if (preloadedState && store) {
		_store = makeStore({
			...store.getState(),
			...preloadedState,
		})

		store = undefined
	}

	if (typeof window === "undefined") return _store

	if (!store) store = _store

	return _store
}

export function useStore(initialState) {
	const store = useMemo(() => initializeStore(initialState), [initialState])
	return store
}
