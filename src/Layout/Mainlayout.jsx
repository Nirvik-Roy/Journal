import React from 'react'
import Header from './Header'
import Footer from './Footer.jsx'
import {Outlet} from 'react-router-dom'
const Mainlayout = () => {
  return (
    <>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Mainlayout
