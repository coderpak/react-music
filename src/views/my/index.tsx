import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const My: FC<IProps> = () => {
  return <div>我的音乐页面</div>
}

export default memo(My)
