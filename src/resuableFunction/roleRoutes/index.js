import { routesAdmin, routesAdminOperator } from 'src/routes'

export const roleRoutes = (userNow) => {
    if (userNow === 'admin') {
      return routesAdmin
    } else {
      return routesAdminOperator
    }
}