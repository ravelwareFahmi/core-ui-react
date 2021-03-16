import { routesAdmin, routesAdminOperator } from 'src/routes'

export const userPrivileges = (userNow) => {
    if (userNow === 'admin') {
      return routesAdmin
    } else {
      return routesAdminOperator
    }
}