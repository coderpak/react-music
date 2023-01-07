import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { useAppSelector, useAppDispatch, shallowEqualApp } from '@/hooks/redux'
import { addCountAction } from '@/store/modules/counter'

interface IProps {
  children?: ReactNode
}

const Home: FC<IProps> = () => {
  const { count } = useAppSelector(
    (state) => ({
      count: state.counter.count
    }),
    shallowEqualApp
  )

  const dispatch = useAppDispatch()
  function handleClick(num: number) {
    dispatch(addCountAction(num))
  }
  return (
    <div>
      <h1>Home</h1>
      <p>当前计数: {count}</p>
      <button onClick={() => handleClick(5)}>+5</button>
    </div>
  )
}

export default memo(Home)
