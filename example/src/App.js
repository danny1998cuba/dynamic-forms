import React from 'react'
import { HashRouter as Router } from 'react-router-dom'

import { AppRoutes } from './data/routes/main.routes'

import { MainLayout } from './layout/MainLayout'



const App = () => {
  return <Router>
    <MainLayout >
      <AppRoutes />
    </MainLayout>
  </Router>
}

export default App
