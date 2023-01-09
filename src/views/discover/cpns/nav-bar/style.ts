import styled from 'styled-components'

export const NavbarWrapper = styled.div`
  height: 35px;
  background-color: #c20c0c;
  line-height: 35px;
  .item-list {
    display: flex;
    padding-left: 180px;
    .item {
      a {
        padding: 2px 13px;
        margin: 7px 17px 0;
        color: #fff;
        &:hover {
          background-color: #9b0909;
          border-radius: 20px;
        }
      }
    }
  }
`
