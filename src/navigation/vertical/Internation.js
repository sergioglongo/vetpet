// ** Icons Import
import { Menu, Edit, Calendar, PlusCircle } from 'react-feather'

export default [
  {
    header:''
  },
  {
    id: 'internation',
    title: 'Internacion',
    icon: <PlusCircle size={20} />,
    badge: 'light-warning',
    badgeText: '3',
    children: [
      {
        id: 'listInternation',
        title: 'Listado',
        icon: <Menu size={12} />,
        action: 'read',
        resource: 'ACL',
        navLink: 'apps/invoice/list/'
      },
      {
        id: 'newInternation',
        title: 'Ingreso',
        icon: <Edit size={12} />,
        action: 'read',
        resource: 'ACL',
        navLink: 'apps/invoice/add'
      },
      {
        id: 'todoInternation',
        title: 'Tareas',
        icon: <Calendar size={12} />,
        action: 'read',
        resource: 'ACL',
        navLink: '/apps/todo'
      }
    ]
  }
]
