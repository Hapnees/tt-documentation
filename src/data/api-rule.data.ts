import { ComponentProps } from 'react'
import { TermList } from '../components/TermList'

export const apiLayerRules: ComponentProps<typeof TermList>['items'] = [
  {
    mark: {
      title: 'shared',
      color: 'red',
    },
    desc: 'api клиент с доп. функциями (например, интерсептор для обработки ошибок)',
  },
  {
    mark: {
      title: 'entities',
      color: 'yellow',
    },
    desc: 'api для получения данных',
  },
  {
    mark: {
      title: 'features',
      color: 'brown',
    },
    desc: 'api, которое относится к взаимодействию пользователя',
  },
  {
    mark: {
      title: 'pages',
      color: 'blue',
    },
    desc: 'api для загрузки данных только в SSR',
  },
]
