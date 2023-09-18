import { ComponentProps } from 'react'
import { TermList } from '../components/TermList'

export const reviewFSDData: ComponentProps<typeof TermList>['items'] = [
  {
    mark: {
      title: 'shared',
      color: 'red',
    },
    desc: 'переиспользуемый код, не имеющий отношения к специфике приложения/бизнеса (например, UIKit, API agent)',
  },
  {
    mark: {
      title: 'entities',
      color: 'yellow',
    },
    desc: 'бизнес-сущности (например, User, Product, Order)',
  },
  {
    mark: {
      title: 'features',
      color: 'brown',
    },
    desc: 'взаимодействия с пользователем, действия, которые несут бизнес-ценность для пользователя (например, SendComment, AddToCart, UsersSearch)',
  },
  {
    mark: {
      title: 'widgets',
      color: 'green',
    },
    desc: 'композиционный слой для соединения сущностей и фич в самостоятельные блоки(например, UserProfile)',
  },
  {
    mark: {
      title: 'pages',
      color: 'blue',
    },
    desc: 'композиционный слой для сборки полноценных страниц из сущностей, фич и виджетов',
  },
  {
    mark: {
      title: 'app',
      color: 'magenta',
    },
    desc: 'настройки, стили и провайдеры для всего приложения',
  },
]
