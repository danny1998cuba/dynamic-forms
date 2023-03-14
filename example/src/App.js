import React from 'react'
import { HashRouter as Router } from 'react-router-dom'

import { routes } from './data/constants'
import { AppRoutes } from './data/routes/main.routes'

import { MainLayout } from './layout/MainLayout'
import { Component } from './pages/Component'



const App = () => {
  return <Router>
    <MainLayout >
      <AppRoutes />
    </MainLayout>
  </Router>
}

export default App
