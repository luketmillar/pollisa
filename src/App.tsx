import React from 'react'
import repository from 'repository'
import { Router } from './core'
import Routes from './Routes'

function App() {
  const [userLoaded, setUserLoaded] = React.useState(false)
  React.useEffect(() => {
    repository.signin().then(() => {
      setUserLoaded(true)
      return repository.loadMyPolls()
    })
  }, [])
  if (!userLoaded) {
    return <div>Loading</div>
  }
  return (
    <Router.Provider>
      <Routes />
    </Router.Provider>
  )
}

export default App
