import React from 'react'
import { Route, Switch, useParams } from 'react-router'
import { Router } from 'core'
import PollSummary from './PollSummary'
import * as Context from './Context'
import * as Models from 'models'
import * as api from 'creator/api'
import NewQuestion from './NewQuestion'
import { useProdux } from 'store/hooks'
import repository from 'repository'

const CreateQuestions = () => {
    const { pollId } = useParams<{ pollId: string }>()
    const handleCreate = React.useCallback((question: Models.Question) => {
        api.createQuestion(pollId, question)
        Router.navigate.goTo(Router.paths.creator.poll(pollId).root)
    }, [pollId])
    React.useEffect(() => {
        return repository.loadPoll(pollId)
    }, [pollId])
    const isLoaded = useProdux(model => model.polls.byId[pollId] !== undefined)
    if (!isLoaded) {
        return <div>Loading</div>
    }
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