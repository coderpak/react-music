import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { TopRankingItemWrapper } from './style'
import { changeImgSize } from '@/utils/format'
import classNames from 'classnames'
import { useAppDispatch } from '@/hooks/redux'
import { fetchSongDetailThunk } from '@/views/player/store'

interface IProps {
  children?: ReactNode
  rankingInfo: any
}

const TopRankingItem: FC<IProps> = (props) => {
  const { rankingInfo } = props
  const dispatch = useAppDispatch()
  function handlePlaySongClick(id: number) {
    console.log(id)
    dispatch(fetchSongDetailThunk(id))
  }
  return (
    <TopRankingItemWrapper>
      <div className="header">
        <div className="img-wrapper">
          <img src={changeImgSize(rankingInfo.coverImgUrl, 200)} alt="" />
          <div className="cover sprite_cover"></div>
        </div>
        <div className="info">
          <h3 className="name">{rankingInfo.name}</h3>
          <div className="icons">
            <span className="paly-icon sprite_02"></span>
            <span className="collect-icon sprite_02"></span>
          </div>
        </div>
      </div>
      <div className="music-list">
        {rankingInfo.tracks.slice(0, 10).map((item: any, index: number) => {
          return (
            <div className="music-item" key={item.id}>
              <span className={classNames({ red: index < 3 }, 'num')}>{index + 1}</span>
              <span className="name">{item.name}</span>
              <div className="icons">
                <span
                  className="play sprite_02"
                  onClick={() => handlePlaySongClick(item.id)}
                ></span>
                <span className="plus sprite_icon2"></span>
                <span className="coll sprite_02"></span>
              </div>
            </div>
          )
        })}
        <div className="music-item">
          <span className="more">查看全部 &gt;</span>
        </div>
      </div>
    </TopRankingItemWrapper>
  )
}

export default memo(TopRankingItem)
