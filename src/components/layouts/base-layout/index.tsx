import { Navigate, Outlet } from 'react-router-dom'
import { getUser } from '../../../helpers/storage'
import Sidebar from '../../Sidebar'
import './styles.scss'

const BaseLayout = ():JSX.Element => {
  const user = getUser() 

  if(!user) return <Navigate to="/login"/>
  return(
    <div className='layout-wrapper'>
      <Sidebar />
      <div className="layout-content">
        <Outlet />
      </div>
    </div>
  )
}

export default BaseLayout
