import { RouteObject, Navigate } from 'react-router-dom'
import React, { lazy } from 'react'

const Home = lazy(() => import('@/views/home/index'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/home"></Navigate>
  },
  {
    path: '/home',
    element: <Home />
  }
]

export default routes
