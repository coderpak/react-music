import styled from 'styled-components'

export const AppPlayerBarWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 52px;
  background-position: 0 0;
  background-repeat: repeat-x;
  .content {
    height: 47px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

interface IBarControlProp {
  isPlaying: boolean
}

export const BarControl = styled.div<IBarControlProp>`
  display: flex;
  align-items: center;
  .btn {
    width: 28px;
    height: 28px;
    &.prev {
      background-position: 0 -130px;
    }
    &.play {
      width: 36px;
      height: 36px;
      background-position: 0 ${(props) => (props.isPlaying ? '-165px' : '-204px')};
      margin: 0 8px;
    }
    &.next {
      background-position: -80px -130px;
    }
  }
`

export const BarPlayerInfo = styled.div`
  display: flex;
  align-items: center;
  width: 642px;
  > a {
    img {
      width: 34px;
      height: 34px;
      border-radius: 5px;
    }
  }
  .info {
    flex: 1;
    margin-left: 12px;
    .song {
      display: flex;
      font-size: 12px;
      .song-name {
        color: #e1e1e1;
      }
      .singer-name {
        color: #a1a1a1;
        margin-left: 5px;
      }
    }
  }

  .progress {
    display: flex;
    align-items: center;
    .ant-slider {
      width: 493px;
      margin: 0;
      .ant-slider-rail {
        height: 9px;
        background: url(${require('@/assets/img/progress_bar.png')});
      }
      .ant-slider-track {
        height: 9px;
        background: url(${require('@/assets/img/progress_bar.png')}) 0 -66px;
      }
      .ant-slider-handle {
        width: 22px;
        height: 24px;
        border: none;
        margin-top: -5px;
        background: url(${require('@/assets/img/sprite_icon.png')}) 0 -250px;
        &::before {
          display: none;
        }
        &::after {
          display: none;
        }
      }
    }
  }
  .timer {
    display: flex;
    margin-left: 10px;
    margin-top: 2px;
    .start {
      color: #e1e1e1;
    }
    .divider {
      color: #a1a1a1;
      margin: 0 3px;
    }
    .end {
      color: #a1a1a1;
    }
  }
`

export const BarOperator = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  top: 3px;

  .btn {
    width: 25px;
    height: 25px;
  }

  .left {
    display: flex;
    align-items: center;
  }

  .pip {
    background: url(${require('@/assets/img/pip_icon')});
  }

  .favor {
    background-position: -88px -163px;
  }

  .share {
    background-position: -114px -163px;
  }

  .right {
    display: flex;
    align-items: center;
    width: 126px;
    padding-left: 13px;
    background-position: -147px -248px;

    .volume {
      background-position: -2px -248px;
    }

    .loop {
      background-position: -3px -344px;
    }

    .playlist {
      padding-left: 18px;
      text-align: center;
      color: #ccc;
      width: 59px;
      background-position: -42px -68px;
    }
  }
`
