// ** Icons Import
import { Menu, Circle, EyeOff, Folder, LifeBuoy, Shopp, ShoppingBag, Package, LogIn, ExternalLink, Layers, ShoppingCart } from 'react-feather'

export default [
  {
    header: 'Ventas'
  },
  {
    id: 'sales',
    title: 'Ventas',
    icon: <ShoppingBag size={12} />,
    action: 'read',
    resource: 'ACL',
    navLink: '/apps/ecommerce/checkout'
  },
  {
    id: 'stockmenu',
    title: 'Stock',
    icon: <Package size={20} />,
    children: [
      {
        id: 'catalog',
        title: 'Catalogo',
        icon: <Layers size={12} />,
        navLink: '/apps/invoice/list/'
      },
      {
        id: 'stockadmin',
        title: 'Gestion Stock',
        icon: <Circle size={12} />,
        children: [
          {
            id: 'input',
            title: 'Ingresos',
            icon: <LogIn size={20} />,
            navLink: 'apps/invoice/add/'
          },
          {
            id: 'movements',
            title: 'Movimientos',
            icon: <ExternalLink size={20} />,
            navLink: '/forms/wizard'
          }
        ]
      }
    ]
  },
  {
    id: 'pro',
    title: 'Funciones Pro',
    icon: <EyeOff size={20} />,
    navLink: '#',
    disabled: true
  }
]
