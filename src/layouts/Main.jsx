import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ThemeToggleButton from '../components/ThemeToggleButton'
import NewAdded from '../components/NewAdded'

const Main = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar 
      
      />
      
        
      
      {/* Outlet */}
      <div className='min-h-[calc(100vh-306px)] '>
        <Outlet />
      
      </div>
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Main
