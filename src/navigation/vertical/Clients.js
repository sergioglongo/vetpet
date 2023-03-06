// ** Icons Import
import { Menu, Edit, EyeOff, GitHub, LifeBuoy, Users, ShoppingBag, Calendar } from 'react-feather'

export default [
  {
    header: 'Clientes'
  },
  {
    id: 'listclient',
    title: 'Gestion Clientes',
    icon: <Users size={12} />,
    action: 'read',
    resource: 'ACL',
    navLink: 'apps/invoice/list/'
  },
  {
    id: 'listpet',
    title: 'Gestion Mascotas',
    icon: <GitHub size={12} />,
    action: 'read',
    resource: 'ACL',
    navLink: 'apps/invoice/list/'
  }
]
