import { Outlet, useNavigation } from 'react-router-dom'
import Navbar from '../Components/Navbar'

const HomeLayout = () => {
  const navigation = useNavigation()
  console.log(navigation)
  const isPageLoading = navigation.state == 'loading';
  return (
    <> {/*All Elements here will he shared with all children*/}
          <Navbar />
          
          {/*The <Section> element will cast any and all CSS rule sets to corresponding  child elements to be rendered with custom formatting (styles) and layout */}
          <section className='page'>
            {/*Outlet is used to render children routes*/}
            {isPageLoading ? <div className='loading'></div> : <Outlet />}
          </section>
    </>
  )
}

export default HomeLayout
