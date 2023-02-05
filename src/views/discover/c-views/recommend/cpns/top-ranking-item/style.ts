import styled from 'styled-components'

export const TopRankingItemWrapper = styled.div`
  width: 230px;
  :last-child {
    width: 228px;
  }
  .header {
    display: flex;
    height: 100px;
    margin: 20px 0 0 20px;
    .img-wrapper {
      position: relative;
      width: 80px;
      height: 80px;
      img {
        width: 80px;
        height: 80px;
      }
      .cover {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-position: -145px -57px;
      }
    }
    .info {
      margin: 5px 0 0 10px;
      .name {
        font-size: 14px;
      }
      .icons {
        display: flex;
        margin-top: 10px;
        span {
          cursor: pointer;
          width: 22px;
          height: 22px;
        }
        .paly-icon {
          background-position: -267px -205px;
          margin-right: 10px;
          &:hover {
            background-position: -267px -235px;
          }
        }
        .collect-icon {
          background-position: -300px -205px;
          &:hover {
            background-position: -300px -235px;
          }
        }
      }
    }
  }
  .music-list {
    .music-item {
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      &:hover {
        .icons {
          display: flex;
        }
      }
      &:last-child {
        justify-content: flex-end;
        .more {
          cursor: pointer;
          margin-right: 10px;
          &:hover {
            text-decoration: underline;
          }
        }
      }
      .num {
        width: 35px;
        text-align: center;
        margin-left: 10px;
        font-size: 16px;
        &.red {
          color: #c10d0c;
        }
      }
      .name {
        flex: 1;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
      }
      .icons {
        display: none;
        width: 82px;
        span {
          width: 17px;
          height: 17px;
          cursor: pointer;
          margin: 0 3px;
        }
        .play {
          background-position: -267px -268px;
        }
        .plus {
          background-position: 0 -700px;
          position: relative;
          top: 2px;
        }
      }
      .coll {
        background-position: -297px -268px;
      }
    }
  }
`
