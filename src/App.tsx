import { useRoutes } from 'react-router-dom'
import routes from '@/router'
import React from 'react'

console.log(2222)

function App() {
  return <div>{useRoutes(routes)}</div>
}

export default App
