import { Link, Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'

const HomeLayout = () => {
  return (
    <> {/*All Elements here will he shared with all children*/}
          <Navbar />
          
          {/*Outlet is used to render children routes*/}
          <Outlet />
    </>
  )
}

export default HomeLayout
