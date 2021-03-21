import React from 'react'
import { useProdux } from 'store/hooks'

const CreateQuestions = ({ pollId }: { pollId: string }) => {
    const poll = useProdux(model => model.polls.byId[pollId])
    return <>
        <h1>{poll.name}</h1>
        <h3>{poll.passcode}</h3>
    </>
}

export default CreateQuestions