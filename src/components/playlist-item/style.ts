import styled from 'styled-components'

export const PlaylistItemWrapper = styled.div`
  width: 140px;
  margin: 15px 0;
  .top {
    position: relative;
    width: 140px;
    height: 140px;
    img {
      width: 140px;
      height: 140px;
    }
    .cover {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-position: 0 0;
    }
    .play-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 27px;
      padding: 0 8px;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      background-position: 0 -537px;
      .paly-info {
        display: flex;
        align-items: center;
        .icon-headset {
          width: 14px;
          height: 11px;
          background-position: 0 -24px;
        }
        .number {
          color: #ccc;
          margin-left: 5px;
          margin-top: 3px;
        }
      }
      .icon-play {
        width: 16px;
        height: 17px;
        background-position: 0 0;
      }
    }
  }
  .bottom {
    font-size: 14px;
    color: #000;
    margin-top: 5px;
    line-height: 1.5;
  }
`
