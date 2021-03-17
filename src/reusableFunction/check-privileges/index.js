import { routesadmin, routesoperator } from 'src/routes'

export const roleRoutes = (userNow) => {
    if (userNow === 'admin') {
      return routesadmin
    } else {
      return routesoperator
    }
}