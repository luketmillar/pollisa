import React from 'react'
import CreatePoll from './CreatePoll'
import * as CreateQuestions from './CreateQuestions'
import provider from './provider'

const CreatorRoot = () => {
    const [pollId, setPollId] = React.useState<string | undefined>()
    const handlecreate = (name: string) => {
        return provider.create(name).then(id => {
            setPollId(id)
        })
    }
    return <>
        <div style={{ height: 200 }} />
        {pollId ? (
            <CreateQuestions.Provider value={pollId}>
                <CreateQuestions.Root />
            </CreateQuestions.Provider>
        )
            : <CreatePoll onCreate={handlecreate} />}
    </>
}

export default CreatorRoot