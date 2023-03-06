// ** Navigation imports
import Dashboards from './Dashboards'
import SalesMenu from './SalesMenu'
import Diary from './Diary'
import Connect from './Connect'
import Internation from './Internation'
import Clients from './Clients'
import Users from './Users'

// ** Merge & Export
export default [...Dashboards, ...SalesMenu,  ...Clients, ...Diary, ...Internation, ...Users, ...Connect]
