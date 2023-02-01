import styled from 'styled-components'

export const TopbannerWrapper = styled.div`
  .content {
    display: flex;
    position: relative;
    height: 285px;
  }
`

export const BannerLeft = styled.div`
  width: 730px;
  position: relative;
  .carousel-item {
    width: 100%;
    img {
      width: 100%;
      height: 285px;
    }
  }

  .dots {
    display: flex;
    position: absolute;
    left: 50%;
    bottom: 20px;
    transform: translateX(-50%);
    .dot-item {
      width: 20px;
      height: 20px;
      background-color: red;
      background: url(${require('@/assets/img/banner_sprite.png')}) 3px -343px;
      cursor: pointer;
      &:hover,
      &.active {
        background-position: -16px -343px;
      }
    }
  }
`

export const BannerRight = styled.div`
  /* width: 254px; */
  flex: 1;
  background: url(${require('@/assets/img/download.png')});
  .download {
    display: block;
    width: 215px;
    height: 56px;
    margin: 186px auto 0;
    &:hover {
      background: url(${require('@/assets/img/download.png')});
      background-position: 1px -290px;
    }
  }
  .text {
    margin: 10px auto;
    text-align: center;
    color: #8d8d8d;
    font-size: 12px;
  }
`

export const BannerControl = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 63px;
  transform: translateY(-50%);
  .btn {
    border: none;
    position: absolute;
    display: block;
    width: 37px;
    height: 63px;
    background-image: url(${require('@/assets/img/banner_sprite.png')});
    background-color: transparent;
    cursor: pointer;
    transition: all 0.3s;
    &.prev {
      left: -80px;
      background-position: 0 -360px;
    }
    &.next {
      right: -80px;
      background-position: 0 -508px;
    }
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
    &:active {
      transform: scale(0.9);
      background-color: rgba(0, 0, 0, 0.2);
    }
  }
`
