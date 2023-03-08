// ** React Imports
import { Link } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Store & Actions
import { store } from '@store/store'
import { getClient } from '../store'

// ** Icons Imports
import { MoreVertical, FileText, Trash2, Archive } from 'react-feather'

// ** Reactstrap Imports
import { Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

// ** Renders Client Columns
const renderClient = row => {
  if (row.avatar.length) {
    return <Avatar className='me-1' img={row.avatar} width='32' height='32' />
  } else {
    return (
      <Avatar
        initials
        className='me-1'
        color={row.avatarColor || 'light-primary'}
        content={row.fullName || 'John Doe'}
      />
    )
  }
}

const statusObj = {
  Activo: 'light-success',
  Inactivo: 'light-secondary'
}

export const columns = [
  {
    name: 'Client',
    sortable: true,
    minWidth: '300px',
    sortField: 'fullName',
    selector: row => row.id,
    cell: row => (
      <div className='d-flex justify-content-left align-items-center'>
        {renderClient(row)}
        <div className='d-flex flex-column'>
          <Link
            to={`/apps/client/view/${row.id}`}
            className='user_name text-truncate text-body'
            onClick={() => store.dispatch(getClient(store.allData.find(client => client.id === row.id)))}
          >
            <span className='fw-bolder'>{row.fullName}</span>
          </Link>
          <small className='text-truncate text-muted mb-0'>{row.email}</small>
        </div>
      </div>
    )
  },
  {
    name: 'Rol',
    sortable: true,
    minWidth: '172px',
    sortField: 'role',
    selector: row => row.role,
    cell: row => renderRole(row)
  },
  {
    name: 'Email',
    minWidth: '230px',
    sortable: true,
    sortField: 'email',
    selector: row => row.email,
    cell: row => <span className='text-capitalize'>{row.email}</span>
  },
  {
    name: 'Estado',
    minWidth: '138px',
    sortable: true,
    sortField: 'status',
    selector: row => row.status,
    cell: row => (
      <Badge className='text-capitalize' color={statusObj[row.status === true ? 'Activo' : 'Inactivo']} pill>
        {row.status === true ? 'Activo' : 'Inactivo'}
      </Badge>
    )
  },
  {
    name: 'Actions',
    minWidth: '100px',
    cell: row => (
      <div className='column-action'>
        <UncontrolledDropdown>
          <DropdownToggle tag='div' className='btn btn-sm'>
            <MoreVertical size={14} className='cursor-pointer' />
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem
              tag={Link}
              className='w-100'
              to={`/apps/user/view/${row.id}`}
              onClick={() => store.dispatch(getUser(store.allData.find(user => user.id === row.id)))}
              // onClick={() => console.log(row.id)}
            >
              <FileText size={14} className='me-50' />
              <span className='align-middle'>Details</span>
            </DropdownItem>
            <DropdownItem tag='a' href='/' className='w-100' onClick={e => e.preventDefault()}>
              <Archive size={14} className='me-50' />
              <span className='align-middle'>Edit</span>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    )
  }
]
