import { useRoutes } from 'react-router-dom'
import routes from '@/router'
import React, { Suspense, useEffect } from 'react'
import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'
import AppPlayerBar from './views/player/app-player-bar'
import { useAppDispatch } from './hooks/redux'
import { fetchSongDetailThunk } from './views/player/store'

function App() {
  const dispatch = useAppDispatch()
  // 获取一首歌
  useEffect(() => {
    dispatch(fetchSongDetailThunk(2017832132))
  }, [])

  return (
    <div>
      <AppHeader></AppHeader>
      <Suspense fallback="">{useRoutes(routes)}</Suspense>
      <AppFooter></AppFooter>
      <AppPlayerBar></AppPlayerBar>
    </div>
  )
}

export default App
