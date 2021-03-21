import React from 'react'
import { Route, Switch } from 'react-router'
import * as Home from './home'
import * as Creator from './creator'
import * as Poll from './poll'
import Polls from './polls'

function Routes() {
    return (
        <Switch>
            <Route exact path="/">
                <Home.Root />
            </Route>
            <Route path="/create">
                <Creator.Root />
            </Route>
            <Route exact path="/poll/:pollId">
                <Poll.Root />
            </Route>
            <Route exact path="/polls">
                <Polls />
            </Route>
            <Route>
                <div>404</div>
            </Route>
        </Switch>
    )
}

export default Routes
