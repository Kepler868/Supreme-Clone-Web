import { Routes, Route, Navigate } from 'react-router-dom'
import { routes } from '../Routes.js'
import { MAIN_ROUTE } from '../utils/consts.js'

const AppRouter = () => {
  console.log(routes)
  return (
    <Routes>
      {routes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} exact />
      ))}
      <Route path="*" element={<Navigate to={MAIN_ROUTE} />} />
    </Routes>
  )
}

export default AppRouter
