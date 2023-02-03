import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { AlbumItemWrapper } from './style'
import { changeImgSize } from '@/utils/format'

interface IProps {
  children?: ReactNode
  albumItemInfo: any
}

const AlbumItem: FC<IProps> = (props) => {
  const { albumItemInfo } = props
  return (
    <AlbumItemWrapper>
      <div className="album-img">
        <img src={changeImgSize(albumItemInfo.picUrl, 100)} alt="" />
        <div className="cover sprite_cover"></div>
      </div>
      <div className="desc">
        <p className="name">{albumItemInfo.name}</p>
        <p className="artist-name">{albumItemInfo.artist.name}</p>
      </div>
    </AlbumItemWrapper>
  )
}

export default memo(AlbumItem)
