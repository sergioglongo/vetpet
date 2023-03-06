// ** Icons Import
import { Menu, Circle, EyeOff, Folder, LifeBuoy, Shopp, ShoppingBag, MessageSquare, Mail, Send, MessageCircle, ThumbsUp, Inbox } from 'react-feather'

export default [
  {
    id: 'connect',
    title: 'Comunicacion',
    icon: <Inbox size={20} />,
    badge: 'light-warning',
    badgeText: '3',
    children: [
      {
        id: 'chat',
        title: 'Chat Interno',
        icon: <MessageSquare size={12} />,
        action: 'read',
        resource: 'ACL',
        navLink: 'apps/chat/'
      },
      {
        id: 'mails',
        title: 'Mails',
        icon: <Mail size={20} />,
        children: [
          {
            id: 'advertising',
            title: 'Publicidad',
            icon: <ThumbsUp size={12} />,
            navLink: '/datatables/advance/'
          },
          {
            id: 'sended',
            title: 'Enviados',
            icon: <Send size={12} />,
            children: [
              {
                id: 'sended-advertising',
                title: 'Publicidades Enviadas',
                navLink: 'apps/email/'
              },
              {
                id: 'sended-notices',
                title: 'Noticias Enviadas',
                navLink: '/apps/email/'
              }
            ]
          }
        ]
      },
      {
        id: 'whatsapp',
        title: 'Whatsapp',
        icon: <MessageCircle size={20} />,
        navLink: '#',
        disabled: true
      }
    ]
  }
]
