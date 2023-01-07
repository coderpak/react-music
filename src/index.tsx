import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import React, { Suspense } from 'react'
import { Provider } from 'react-redux'
import 'normalize.css'

import App from '@/App'
import '@/assets/css/index.css'
import store from './store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={store}>
    <HashRouter>
      <Suspense fallback="loading ...">
        <App />
      </Suspense>
    </HashRouter>
  </Provider>
)
