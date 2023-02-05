import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { SettledSingerWrapper } from './style'
import AreaHeaderV2 from '@/components/area-header-v2'
import { shallowEqualApp, useAppSelector } from '@/hooks/redux'
import { changeImgSize } from '@/utils/format'

interface IProps {
  children?: ReactNode
}

const SettledSinger: FC<IProps> = () => {
  const { settledSingers } = useAppSelector(
    (state) => ({
      settledSingers: state.recommend.settledSingers
    }),
    shallowEqualApp
  )
  return (
    <SettledSingerWrapper>
      <AreaHeaderV2 title="入驻歌手" showMore={true} moreLink="/"></AreaHeaderV2>
      <div className="artists">
        {settledSingers.map((item) => {
          return (
            <a href="#/discover/artist" className="item" key={item.id}>
              <img src={changeImgSize(item.picUrl, 80)} alt="" />
              <div className="info">
                <div className="name">{item.name}</div>
                <div className="alias">{item.alias.join(' ')}</div>
              </div>
            </a>
          )
        })}
      </div>
      <div className="apply-for">
        <a href="#/">申请成为网易音乐人</a>
      </div>
    </SettledSingerWrapper>
  )
}

export default memo(SettledSinger)
