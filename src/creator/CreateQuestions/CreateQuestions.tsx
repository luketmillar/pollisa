import React from 'react'
import { Route, Switch, useParams } from 'react-router'
import { Router } from 'core'
import PollSummary from './PollSummary'
import * as Context from './Context'
import * as Models from 'models'
import NewQuestion from './NewQuestion'
import actions from 'store'

const CreateQuestions = () => {
    const { pollId } = useParams<{ pollId: string }>()
    const handleCreate = React.useCallback((question: Models.Question) => {
        actions.polls.addQuestion(pollId, question)
        Router.navigate.goTo(Router.paths.creator.poll(pollId).root)
    }, [pollId])
    return <Context.Provider value={pollId}><Switch>
        <Route exact path="/create/:pollId/new">
            <NewQuestion onCreate={handleCreate} />
        </Route>
        <Route path="/create/:pollId">
            <PollSummary onNewQuestion={() => Router.navigate.goTo(Router.paths.creator.poll(pollId).newQuestion)} />
        </Route>
    </Switch>
    </Context.Provider>
}

export default CreateQuestions