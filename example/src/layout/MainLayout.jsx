import React from 'react'
import { Footer } from './Footer'
import { Navbar } from './Navbar'

export const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />

      <main>
        <div className="container">
          {children}
        </div>
      </main>
      <Footer />
    </>
  )
}
