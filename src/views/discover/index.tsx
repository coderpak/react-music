import React, { memo, Suspense } from 'react'
import type { FC, ReactNode } from 'react'
import NavBar from './cpns/nav-bar'
import { Outlet } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}

const Discover: FC<IProps> = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Suspense fallback="">
        <Outlet></Outlet>
      </Suspense>
    </div>
  )
}

export default memo(Discover)
