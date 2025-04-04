import React from 'react'
import Nav from './Nav'
import Header from './Header'
import MainContent from './MainContent'
const Index = () => {
  return (
    <>
      {/* <!-- Scroll To Top Start--> */}
      <button className="scrollToTop d-none d-lg-block"><i className="mat-icon fas fa-angle-double-up"></i></button>
      {/* <!-- Scroll To Top End --> */}

      {/* <!-- header-section start --> */}
      <Header />
      {/* <!-- header-section end --> */}

      {/* <!-- Main Content-section Start --> */}
       <MainContent />
      {/* <!-- Main Content-section End --> */}

      

    </>
  )
}

export default Index
