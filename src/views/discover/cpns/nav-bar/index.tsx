import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { NavbarWrapper } from './style'
import { discoverMenu } from '@/assets/data/local_data'
import { NavLink } from 'react-router-dom'
interface IProps {
  children?: ReactNode
}

const NavBar: FC<IProps> = () => {
  return (
    <NavbarWrapper>
      <div className="wrap-v1">
        <div className="item-list">
          {discoverMenu.map((item, index) => {
            return (
              <div className="item" key={index}>
                <NavLink to={item.link}>{item.title}</NavLink>
              </div>
            )
          })}
        </div>
      </div>
    </NavbarWrapper>
  )
}

export default memo(NavBar)
