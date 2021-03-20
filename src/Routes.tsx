import React from 'react'
import { Route, Switch } from 'react-router'

function Routes() {
    return (
        <Switch>
            <Route exact path="/">
                <div>home</div>
            </Route>
            <Route exact path="/create">
                <div>creator</div>
            </Route>
            <Route exact path="/poll/:pollId">
                <div>poll</div>
            </Route>
            <Route>
                <div>404</div>
            </Route>
        </Switch>
    )
}

export default Routes
