import React from 'react'
import { Route, Switch } from 'react-router'
import { Router } from 'core'
import CreatePoll from './CreatePoll'
import * as CreateQuestions from './CreateQuestions'
import provider from './provider'

const CreatorRoot = () => {
    const handlecreate = (name: string) => {
        return provider.create(name).then(id => {
            Router.navigate.goTo(Router.paths.creator.poll(id).root)
        })
    }
    return <Switch>
        <Route exact path="/create">
            <CreatePoll onCreate={handlecreate} />
        </Route>
        <Route path="/create/:pollId">
            <CreateQuestions.Root />
        </Route>
    </Switch>
}

export default CreatorRoot