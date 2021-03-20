import React from 'react'
import { Router } from 'react-router-dom'
import { getHistory } from './history'
export { default as navigate } from './navigate'
export { default as paths } from './paths'

export const Provider = ({ children }: React.PropsWithChildren<{}>) => {
    return <Router history={getHistory()}>{children}</Router>
}
