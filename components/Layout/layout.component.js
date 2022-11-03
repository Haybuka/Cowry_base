import React from 'react'
import Navbar from '../Navbar/navbar.component'
import Download from '../Download/download.component'
import Footer from '../Footer/footer.component'
const Layout = ({ children }) => {
  return (
    <div className=''>
      <Navbar />
      {children}
      <Download />
      <Footer />
    </div>
  )
}

export default Layout