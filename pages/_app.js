import { Provider } from "react-redux"
import { persistStore } from "redux-persist"
import { PersistGate } from "redux-persist/integration/react"
import { createGlobalStyle, ThemeProvider } from "styled-components"

import { useStore } from "./../redux/store"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
	a {
		text-decoration: none;
		text-align: center;
	}
`

const theme = {
	colors: {
		primary: "#0070f3",
	},
}

export default function App({ Component, pageProps }) {
	const store = useStore(pageProps.initialReduxState)
	const persistor = persistStore(store, {}, function () {
		persistor.persist()
	})

	return (
		<Provider store={store}>
			<PersistGate loading={<div>loading</div>} persistor={persistor}>
				<GlobalStyle />
				<ThemeProvider theme={theme}>
					<Component {...pageProps} />
				</ThemeProvider>
			</PersistGate>
		</Provider>
	)
}
