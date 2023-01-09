import { useRoutes } from 'react-router-dom'
import routes from '@/router'
import React, { Suspense } from 'react'
import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'

console.log('---')

function App() {
  return (
    <div>
      <AppHeader></AppHeader>
      <Suspense fallback="">{useRoutes(routes)}</Suspense>
      <AppFooter></AppFooter>
    </div>
  )
}

export default App
