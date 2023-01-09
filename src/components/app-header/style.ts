import styled from 'styled-components'

export const AppHeaderWrapper = styled.div`
  background-color: #242424;
  height: 70px;
  overflow: hidden;
  color: #fff;
  .content {
    display: flex;
    justify-content: space-between;
    height: 100%;
    .header-left {
      display: flex;
      .logo {
        display: flex;
        width: 176px;
        background-position: 0 0;
        a {
          width: 100%;
          height: 100%;
          text-indent: -999px;
        }
      }
      .item-list {
        display: flex;
        .item {
          a {
            display: block;
            position: relative;
            height: 100%;
            line-height: 69px;
            padding: 0 19px;
            color: #ccc;
            font-size: 14px;

            &:hover,
            &.active {
              background-color: #000000;
              color: #fff;
            }
            &.active::after {
              content: '';
              position: absolute;
              border: 6px solid transparent;
              border-bottom-color: #c20c0c;
              bottom: 0;
              left: 50%;
              transform: translateX(-50%);
            }
          }
          :last-of-type a {
            &::before {
              content: '';
              position: absolute;
              top: 16px;
              right: -20px;
              background: url(${require('@/assets/img/sprite_01.png')}) no-repeat -192px 0;
              width: 26px;
              height: 13px;
            }
          }
        }
      }
    }
    .header-right {
      display: flex;
      align-items: center;
      a {
        flex-shrink: 0;
      }
      .search {
        width: 158px;
        height: 32px;
        .ant-input-affix-wrapper {
          border-radius: 16px;
        }
        input {
          &::placeholder {
            font-size: 12px;
          }
        }
      }
      .creator {
        width: 90px;
        height: 32px;
        margin: 0 20px;
        line-height: 32px;
        text-align: center;
        color: #ccc;
        border: 1px solid #4f4f4f;
        border-radius: 20px;
        &:hover {
          border: 1px solid #fff;
        }
      }
      .login {
        color: #787878;
        line-height: 32px;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`

export const Divider = styled.div`
  height: 5px;
  background-color: #c20c0c;
`
