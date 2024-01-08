import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const Layout = () => {
  return (
    <div className='dark:bg-black dark:text-white h-full'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout