import Navbar from './components/ui/Navbar'
import { Outlet } from 'react-router'

function Layout() {

  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default Layout