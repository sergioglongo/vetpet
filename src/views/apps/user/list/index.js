// ** User List Component
import Table from './Table'

// ** Reactstrap Imports
import { Row, Col } from 'reactstrap'

// ** Custom Components
import StatsHorizontal from '@components/widgets/stats/StatsHorizontal'

// ** Icons Imports
import { User, UserPlus, UserCheck, UserX } from 'react-feather'
import { useGetAllClientsQuery } from '../../../../queries/client/apiClient'

// ** Styles
import '@styles/react/apps/app-users.scss'

const ClientList = () => {
  const { data: dataClient } = useGetAllClientsQuery()

  return (
    <div className='app-user-list'>
      <Row>
        <Col lg='4' sm='12'>
          <StatsHorizontal
            color='primary'
            statTitle='Total de Usuarios'
            icon={<User size={20} />}
            renderStats={<h3 className='fw-bolder mb-75'>{dataClient?.totalClients}</h3>}
          />
        </Col>
        <Col lg='4' sm='6'>
          <StatsHorizontal
            color='success'
            statTitle='Usuarios Activos'
            icon={<UserCheck size={20} />}
            renderStats={<h3 className='fw-bolder mb-75'>{dataClient?.activeClients}</h3>}
          />
        </Col>        
        <Col lg='4' sm='6'>
          <StatsHorizontal
            color='warning'
            statTitle='Usuarios Inactivos'
            icon={<UserX size={20} />}
            renderStats={<h3 className='fw-bolder mb-75'>{dataClient?.totalClients - dataClient?.activeClients}</h3>}
          />
        </Col>
      </Row>
      <Table />
    </div>
  )
}

export default ClientList
