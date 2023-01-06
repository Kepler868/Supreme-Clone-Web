import Main from './pages/Main'
import News from './pages/News'
import { MAIN_ROUTE, NEWS_ROUTE } from './utils/consts'

export const routes = [
  {
    path: MAIN_ROUTE,
    Component: Main,
  },
  {
    path: NEWS_ROUTE,
    Component: News,
  },
]
