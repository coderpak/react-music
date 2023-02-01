import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { useAppDispatch } from '@/hooks/redux'
import { fetchRecommendAction } from './store'
import TopBanner from './cpns/top-banner'

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  dispatch(fetchRecommendAction())
  return (
    <div>
      <TopBanner></TopBanner>
      Recommend
    </div>
  )
}

export default memo(Recommend)
