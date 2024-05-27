
import { Outlet } from 'react-router-dom'

// Components

import Navbar from '../components/layout/navbar/Navbar'
import Menu from '../components/layout/menu/Menu'
import Footer from '../components/layout/footer/Footer'

const Layout = () => {
    return (
        <div className='main'>
            <Navbar />
            <div className='container'>
                <div className='menu-container'>
                    <Menu />
                </div>
                <div className='contact-container'>
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Layout