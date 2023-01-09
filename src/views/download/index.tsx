import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Download: FC<IProps> = () => {
  return <div>下载客户端页面</div>
}

export default memo(Download)
