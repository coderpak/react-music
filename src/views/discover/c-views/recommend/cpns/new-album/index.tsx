import React, { memo, useRef } from 'react'
import type { FC, ReactNode, ElementRef } from 'react'
import { NewAlbumWrapper } from './style'
import AreaHeaderV1 from '@/components/area-header-v1'
import { shallowEqualApp, useAppSelector } from '@/hooks/redux'
import { Carousel } from 'antd'
import AlbumItem from '@/components/album-item'

interface IProps {
  children?: ReactNode
}

const NewAlbum: FC<IProps> = () => {
  const carouselRef = useRef<ElementRef<typeof Carousel>>(null)

  const { newAlbumList } = useAppSelector(
    (state) => ({
      newAlbumList: state.recommend.newAlbumList
    }),
    shallowEqualApp
  )

  function handlePrevClick() {
    carouselRef.current?.prev()
  }
  function handleNextClick() {
    carouselRef.current?.next()
  }
  return (
    <NewAlbumWrapper>
      <AreaHeaderV1 title="新碟上架"></AreaHeaderV1>
      <div className="content">
        <span className="icon prev sprite_02" onClick={handlePrevClick}></span>
        <div className="carousel-wrapper">
          <Carousel ref={carouselRef} dots={false}>
            {[0, 1].map((item) => {
              return (
                <div className="banner-list" key={item}>
                  {newAlbumList.slice(item * 5, item * 5 + 5).map((item) => {
                    return <AlbumItem key={item.id} albumItemInfo={item}></AlbumItem>
                  })}
                </div>
              )
            })}
          </Carousel>
        </div>
        <span className="icon next sprite_02" onClick={handleNextClick}></span>
      </div>
    </NewAlbumWrapper>
  )
}

export default memo(NewAlbum)
