import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import React from 'react'
import { Provider } from 'react-redux'
import 'normalize.css'

import App from '@/App'
import '@/assets/css/index.css'
import store from './store'
import { ThemeProvider } from 'styled-components'
import theme from './assets/theme'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <HashRouter>
        <App />
      </HashRouter>
    </ThemeProvider>
  </Provider>
)
