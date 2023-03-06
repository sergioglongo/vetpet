// ** Icons Import
import { CheckSquare, Edit, EyeOff, Folder, LifeBuoy, Shopp, ShoppingBag, Cal, Calendar, List } from 'react-feather'

export default [
  {
    header: 'Agenda'
  },
  {
    id: 'calendar',
    title: 'Calendario',
    icon: <Calendar size={12} />,
    action: 'read',
    resource: 'ACL',
    navLink: '/apps/calendar'
  },
  {
    id: 'appointment',
    title: 'Citas',
    icon: <CheckSquare size={20} />,
    children: [
      {
        id: 'new-appointment',
        title: 'Nueva Cita',
        icon: <Edit size={18} />,
        navLink: '/apps/invoice/add'
      },     
       {
        id: 'list-appointment',
        title: 'Lista Citas',
        icon: <List size={18} />,
        navLink: '/apps/user/list'
      }
    ]
  },
  {
    id: 'todo',
    title: 'Tareas',
    icon: <Calendar size={12} />,
    action: 'read',
    resource: 'ACL',
    navLink: '/apps/todo'
  }
]
