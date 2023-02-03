import styled from 'styled-components'

export const NewAlbumWrapper = styled.div`
  > .content {
    display: flex;
    align-items: center;
    height: 186px;
    padding: 0 5px;
    margin: 20px 0 37px;
    background-color: #f5f5f5;
    border: 1px solid #d3d3d3;
    .icon {
      position: relative;
      top: -20px;
      cursor: pointer;
      width: 17px;
      height: 17px;
      &.next {
        background-position: -300px -75px;
      }
      &.prev {
        background-position: -260px -75px;
      }
    }
    .carousel-wrapper {
      flex: 1;
      overflow: hidden;
      .banner-list {
        display: flex !important;
        justify-content: space-between;
      }
    }
  }
`
