import React, { ComponentProps, FC } from 'react'
import { Mark } from '../shared/Mark'
import styles from './TermList.module.scss'

interface IMark {
  title: string
  color?: ComponentProps<typeof Mark>['color']
}

interface ITerm {
  mark?: IMark
  title?: string
  desc: string
}

interface ITermListProps {
  items: ITerm[]
}

export const TermList: FC<ITermListProps> = ({ items }) => {
  return (
    <ul className={styles.list}>
      {items.map((_item, index) => (
        <li key={index}>
          {_item.mark && (
            <>
              <Mark color={_item.mark.color}>{_item.mark.title}</Mark>{' '}
            </>
          )}
          {_item.title && <span>{_item.title}</span>} —{' '}
          <span>{_item.desc}</span>
        </li>
      ))}
    </ul>
  )
}
