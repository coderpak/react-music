import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { useAppDispatch } from '@/hooks/redux'
import { fetchRankingDataAction, fetchRecommendAction } from './store'
import TopBanner from './cpns/top-banner'
import { RecommendWrapper } from './style'
import HotRecommend from './cpns/hot-recommend'
import NewAlbum from './cpns/new-album'
import TopRanking from './cpns/top-ranking'
import UserLogin from './cpns/user-login'
import SettledSinger from './cpns/settled-singer'
import HotAnchor from './cpns/hot-anchor'

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchRecommendAction())
    dispatch(fetchRankingDataAction())
  }, [])

  return (
    <RecommendWrapper>
      <TopBanner></TopBanner>
      <div className="content wrap-v2">
        <div className="left">
          <HotRecommend></HotRecommend>
          <NewAlbum></NewAlbum>
          <TopRanking></TopRanking>
        </div>
        <div className="right">
          <UserLogin></UserLogin>
          <SettledSinger></SettledSinger>
          <HotAnchor></HotAnchor>
        </div>
      </div>
    </RecommendWrapper>
  )
}

export default memo(Recommend)
