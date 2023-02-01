import React, { memo, useState, useRef } from 'react'
import type { FC, ReactNode, ElementRef } from 'react'
import { shallowEqualApp, useAppSelector } from '@/hooks/redux'
import { BannerControl, BannerLeft, BannerRight, TopbannerWrapper } from './style'
import { Carousel } from 'antd'
import classNames from 'classnames'

interface IProps {
  children?: ReactNode
}

const TopBanner: FC<IProps> = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselRef = useRef<ElementRef<typeof Carousel>>(null)

  const { banner } = useAppSelector(
    (state) => ({
      banner: state.recommend.banner
    }),
    shallowEqualApp
  )

  const onChange = (currentSlide: number) => {
    setCurrentIndex(currentSlide)
  }

  let currentImg = null
  if (banner.length > 0) {
    currentImg = banner[currentIndex].imageUrl + '?imageView&blur=40x20'
  }

  function handlePrevClick() {
    carouselRef.current?.prev()
  }
  function handleNextClick() {
    carouselRef.current?.next()
  }
  function handleDotClick(index: number) {
    console.log(index)
    carouselRef.current?.goTo(index)
  }
  return (
    <TopbannerWrapper style={{ background: `url(${currentImg})` }}>
      <div className="content wrap-v2">
        <BannerLeft>
          <Carousel dots={false} ref={carouselRef} afterChange={onChange} autoplay effect="fade">
            {banner.map((item) => {
              return (
                <div className="carousel-item" key={item.imageUrl}>
                  <img src={item.imageUrl} alt="" />
                </div>
              )
            })}
          </Carousel>
          <ul className="dots">
            {banner.map((item, index) => {
              return (
                <div
                  onClick={(e) => handleDotClick(index)}
                  className={classNames('dot-item', { active: currentIndex === index })}
                  key={item.imageUrl}
                ></div>
              )
            })}
          </ul>
        </BannerLeft>
        <BannerRight>
          <a href="/" className="download"></a>
          <p className="text">PC 安卓 iPhone WP iPad Mac 六大客户端</p>
        </BannerRight>
        <BannerControl>
          <button onClick={handlePrevClick} className="prev btn"></button>
          <button onClick={handleNextClick} className="next btn"></button>
        </BannerControl>
      </div>
    </TopbannerWrapper>
  )
}

export default memo(TopBanner)
