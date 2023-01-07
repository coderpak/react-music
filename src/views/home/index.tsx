import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { useAppSelector, useAppDispatch, shallowEqualApp } from '@/hooks/redux'
import { addCountAction } from '@/store/modules/counter'
import { HomeWrapper } from './style'

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
    <HomeWrapper>
      <h1>Hello react</h1>
      <h2>当前计数: {count}</h2>
      <button onClick={() => handleClick(5)}>+5</button>
    </HomeWrapper>
  )
}

export default memo(Home)
