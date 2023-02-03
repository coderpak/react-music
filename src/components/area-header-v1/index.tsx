import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { AreaHeaderV1Wrapper } from './style'
import { Link } from 'react-router-dom'

interface IProps {
  children?: ReactNode
  title: string
  keywords?: any[]
  moreLink?: string
  showMore?: boolean
}

const AreaHeaderV1: FC<IProps> = (props) => {
  const { title, keywords = [], moreLink = '/', showMore = true } = props
  return (
    <AreaHeaderV1Wrapper className="sprite_02">
      <div className="content">
        <div className="title">{title}</div>
        <div className="keywords">
          {keywords.map((item, index) => {
            return (
              <div className="item" key={item.name}>
                <Link className="name text" to={item.url}>
                  {item.name}
                </Link>
                {index < keywords.length - 1 && <span className="line">|</span>}
              </div>
            )
          })}
        </div>
      </div>
      {showMore && (
        <div className="more">
          <Link className="text" to={moreLink}>
            更多
          </Link>
          <i className="more-icon sprite_02"></i>
        </div>
      )}
    </AreaHeaderV1Wrapper>
  )
}

export default memo(AreaHeaderV1)
