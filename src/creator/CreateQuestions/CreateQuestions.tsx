import React from 'react'
import { useProdux } from 'store/hooks'
import { usePollId } from './Context'

const CreateQuestions = () => {
    const pollId = usePollId()
    const poll = useProdux(model => model.polls.byId[pollId])
    return <>
        <h1>{poll.name}</h1>
        <h3>{poll.passcode}</h3>
    </>
}

export default CreateQuestions