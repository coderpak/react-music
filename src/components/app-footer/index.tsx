import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { Button } from 'antd'
import { AppFooterWrapper } from './style'
import { useNavigate } from 'react-router-dom'
interface IProps {
  children?: ReactNode
}

const AppFooter: FC<IProps> = () => {
  const navigate = useNavigate()
  function toRecommend() {
    navigate('/discover/recommend')
  }
  return (
    <AppFooterWrapper>
      <button className="text">AppFooterWrapper</button>
      <Button type="primary" onClick={toRecommend}>
        Primary Button
      </Button>
    </AppFooterWrapper>
  )
}

export default memo(AppFooter)
