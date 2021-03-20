import React from 'react'
import { Router } from './core'
import Routes from './Routes'

function App() {
  return (
    <Router.Provider>
      <Routes />
    </Router.Provider>
  )
}

export default App
