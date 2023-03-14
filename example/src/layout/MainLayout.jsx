import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'
import { Navbar } from './Navbar'

export const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />

      <main>
        <div className="container">
          {/* <Outlet /> */}
          {children}
        </div>
      </main>

      {/* <div className="d-flex">
        <div className="container d-flex justify-content-center align-items-center">
          <FullExample />
        </div>
      </div> */}
      <Footer />
    </>
  )
}
