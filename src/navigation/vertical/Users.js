// ** Icons Import
import { Mail, MessageSquare, CheckSquare, Calendar, FileText, Circle, ShoppingCart, User, Shield, Menu, UserMinus, UserCheck } from 'react-feather'

export default [
  {
    header: 'Usuarios'
  },
  {
    id: 'users',
    title: 'Usuarios',
    icon: <User size={20} />,
    children: [
      {
        id: 'listUsers',
        title: 'Listado',
        icon: <Menu size={12} />,
        navLink: '/apps/user/list'
      },
      {
        id: 'roles-permissions',
        title: 'Roles y Permisos',
        icon: <Shield size={20} />,
        children: [
          {
            id: 'roles',
            title: 'Roles',
            icon: <Circle size={12} />,
            navLink: '/apps/roles'
          },
          {
            id: 'permissions',
            title: 'Permisos',
            icon: <Circle size={12} />,
            navLink: '/apps/permissions'
          }
        ]
      }
    ]
  }
]
