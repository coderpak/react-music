import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { PlaylistItemWrapper } from './style'
import { Link } from 'react-router-dom'
import { changeImgSize, formatCount } from '@/utils/format'

interface IProps {
  children?: ReactNode
  playlisyItemInfo: any
}

const PlayListItem: FC<IProps> = (props) => {
  const { playlisyItemInfo } = props
  return (
    <PlaylistItemWrapper>
      <div className="top">
        <img src={changeImgSize(playlisyItemInfo.picUrl, 140)} alt="" />
        <Link className="cover sprite_cover" to="/"></Link>
        <div className="play-bar sprite_cover">
          <div className="paly-info">
            <span className="icon-headset sprite_icon"></span>
            <span className="number">{formatCount(playlisyItemInfo.playCount)}</span>
          </div>
          <span className="icon-play sprite_icon"></span>
        </div>
      </div>
      <div className="bottom">{playlisyItemInfo.name}</div>
    </PlaylistItemWrapper>
  )
}

export default memo(PlayListItem)
