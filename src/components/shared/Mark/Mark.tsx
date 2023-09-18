import React, { FC, ReactNode } from 'react'
import cn from 'classnames'
import styles from './Mark.module.scss'

type IMarkColor =
  | 'transparent'
  | 'magenta'
  | 'blue'
  | 'green'
  | 'brown'
  | 'yellow'
  | 'red'

interface IMarkProps {
  color?: IMarkColor
  children?: ReactNode
}

export const Mark: FC<IMarkProps> = ({ color = 'green', children }) => {
  return (
    <span className={cn(styles.mark, styles[`mark_${color}`])}>{children}</span>
  )
}
