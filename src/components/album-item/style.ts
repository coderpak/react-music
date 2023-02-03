import styled from 'styled-components'

export const AlbumItemWrapper = styled.div`
  width: 118px;
  position: relative;
  .album-img {
    width: 118px;
    img {
      width: 100px;
      height: 100px;
    }
    .cover {
      height: 100px;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-position: 0 -570px;
    }
  }
  .desc {
    font-size: 12px;
    .name {
      color: #000;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .artist-name {
      color: #666;
    }
  }
`
