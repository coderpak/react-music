import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Friend: FC<IProps> = () => {
  return <div>关注页面</div>
}

export default memo(Friend)
