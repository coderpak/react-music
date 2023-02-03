import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { HotRecommendWrapper } from './style'
import AreaHeaderV1 from '@/components/area-header-v1'
import { shallowEqualApp, useAppSelector } from '@/hooks/redux'
import PlaylistItem from '@/components/playlist-item'

interface IProps {
  children?: ReactNode
}

const HotRecommend: FC<IProps> = () => {
  const { hotRecommendPlaylist } = useAppSelector(
    (state) => ({
      hotRecommendPlaylist: state.recommend.hotRecommendPlaylist
    }),
    shallowEqualApp
  )
  return (
    <HotRecommendWrapper>
      <AreaHeaderV1
        title="热门推荐"
        keywords={[
          { name: '华语', url: '/discover/songs/?cat=华语' },
          { name: '流行', url: '/discover/songs/?cat=流行' },
          { name: '摇滚', url: '/discover/songs/?cat=摇滚' }
        ]}
        moreLink="/discover/songs"
      ></AreaHeaderV1>
      <div className="recommend-list">
        {hotRecommendPlaylist.map((item) => {
          return <PlaylistItem key={item.id} playlisyItemInfo={item} />
        })}
      </div>
    </HotRecommendWrapper>
  )
}

export default memo(HotRecommend)
