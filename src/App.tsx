import { useRoutes } from 'react-router-dom'
import routes from '@/router'
import React from 'react'

console.log('---')

function App() {
  return <div>{useRoutes(routes)}</div>
}

export default App
