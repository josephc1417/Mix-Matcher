import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'

const HomeLayout = () => {
  return (
    <> {/*All Elements here will he shared with all children*/}
          <Navbar />
          




          {/*The <Section> element will cast any and all CSS rule sets to corresponding  child elements to be rendered with custom formatting (styles) and layout */}
          <section className='page'>
            {/*Outlet is used to render children routes*/}
            <Outlet />
          </section>
    </>
  )
}

export default HomeLayout
