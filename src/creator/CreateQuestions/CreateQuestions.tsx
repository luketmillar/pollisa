import React from 'react'
import { Route, Switch, useParams } from 'react-router'
import { Router } from 'core'
import PollSummary from './PollSummary'
import * as Context from './Context'

const CreateQuestions = () => {
    const { pollId } = useParams<{ pollId: string }>()
    return <Context.Provider value={pollId}><Switch>
        <Route exact path="/create/:pollId/new">
            <div>new question</div>
        </Route>
        <Route path="/create/:pollId">
            <PollSummary onNewQuestion={() => Router.navigate.goTo(Router.paths.creator.poll(pollId).newQuestion)} />
        </Route>
    </Switch>
    </Context.Provider>
}

export default CreateQuestions