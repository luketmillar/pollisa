import React from 'react'
import { Router } from 'react-router-dom'
import { getHistory } from './history'

const RouterRoot = ({ children }: React.PropsWithChildren<{}>) => {
    return <Router history={getHistory()}>{children}</Router>
}

export default RouterRoot