import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { useAppSelector } from '@/hooks/redux'

interface IProps {
  children?: ReactNode
}

const Download: FC<IProps> = () => {
  // const { count } = useSelector(
  //   (state) => ({
  //     count: state.counter.count
  //   }),
  //   shallowEqual
  // )
  const { count } = useAppSelector(
    (state) => ({
      count: state.counter.count
    }),
    shallowEqual
  )
  return (
    <div>
      <h1>{count}</h1>
      <div>下载客户端页面</div>
    </div>
  )
}

export default memo(Download)
