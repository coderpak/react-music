import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { AppHeaderWrapper, Divider } from './style'
import itemList from '@/assets/data/header_titles.json'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
interface IProps {
  children?: ReactNode
}

const AppHeader: FC<IProps> = () => {
  const location = useLocation()
  function renderItem(item: any) {
    if (item.type == 'path') {
      return <NavLink to={item.link}>{item.title}</NavLink>
    } else {
      return (
        <a href={item.link} target="_blank" rel="noreferrer">
          {item.title}
        </a>
      )
    }
  }
  function handleSearch(e: any) {
    console.log(e.target.value)
  }
  return (
    <>
      <AppHeaderWrapper>
        <div className="content wrap-v1">
          <div className="header-left">
            <h1 className="logo sprite_01">
              <a href="/">网易云音乐</a>
            </h1>
            <div className="item-list">
              {itemList.map((item, index) => {
                return (
                  <div className="item" key={index}>
                    {renderItem(item)}
                  </div>
                )
              })}
            </div>
          </div>
          <div className="header-right">
            <div className="search">
              <Input
                placeholder="音乐/视频/电台/用户"
                prefix={<SearchOutlined />}
                onChange={handleSearch}
              />
            </div>
            <a className="creator" href="/">
              创作者中心
            </a>
            <a className="login" href="/">
              登录
            </a>
          </div>
        </div>
      </AppHeaderWrapper>
      {!location.pathname.startsWith('/discover') && <Divider />}
    </>
  )
}

export default memo(AppHeader)
