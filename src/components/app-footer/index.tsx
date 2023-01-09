import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { Button } from 'antd'
interface IProps {
  children?: ReactNode
}

const AppFooter: FC<IProps> = () => {
  return (
    <div>
      AppFooter
      <Button type="primary">Primary Button</Button>
    </div>
  )
}

export default memo(AppFooter)
