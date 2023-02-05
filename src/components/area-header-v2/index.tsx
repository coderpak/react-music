import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { AreaHeaderV2Wrapper } from './style'
import { Link } from 'react-router-dom'

interface IProps {
  children?: ReactNode
  moreLink?: string
  showMore?: boolean
  title: string
}

const SettledSinger: FC<IProps> = (props) => {
  const { title, moreLink, showMore } = props
  return (
    <AreaHeaderV2Wrapper>
      <div className="title">{title}</div>
      {showMore && moreLink && (
        <Link className="more" to={moreLink}>
          查看更多 &gt;
        </Link>
      )}
    </AreaHeaderV2Wrapper>
  )
}

export default memo(SettledSinger)
