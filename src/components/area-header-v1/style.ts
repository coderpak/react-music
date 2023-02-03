import styled from 'styled-components'

export const AreaHeaderV1Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 10px 0 34px;
  height: 33px;
  background-position: -225px -156px;
  border-bottom: 2px solid #c10d0c;
  .text {
    font-size: 12px;
    color: #666;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
  .content {
    display: flex;
    align-items: center;
    .title {
      font-size: 20px;
      margin-right: 20px;
    }
    .keywords {
      display: flex;
      align-items: center;
      .item {
        .line {
          margin: 0 15px;
        }
      }
    }
  }
  .more {
    display: flex;
    align-items: center;
    .more-icon {
      width: 12px;
      height: 12px;
      background-position: 0 -240px;
    }
  }
`
