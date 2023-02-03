import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { TopRankingWrapper } from './style'
import AreaHeaderV1 from '@/components/area-header-v1'
import { shallowEqualApp, useAppSelector } from '@/hooks/redux'
import TopRankingItem from '../top-ranking-item'

interface IProps {
  children?: ReactNode
}

const TopRanking: FC<IProps> = () => {
  const { rankingDataList } = useAppSelector(
    (state) => ({
      rankingDataList: state.recommend.rankingDataList
    }),
    shallowEqualApp
  )
  return (
    <TopRankingWrapper>
      <AreaHeaderV1 title="榜单" moreLink="/discover/ranking"></AreaHeaderV1>
      <div className="content">
        {rankingDataList.map((item) => {
          return <TopRankingItem key={item.id} rankingInfo={item}></TopRankingItem>
        })}
      </div>
    </TopRankingWrapper>
  )
}

export default memo(TopRanking)
