import React from 'react'
import { usePoll, usePollIds } from './hooks'

const Polls = () => {
    const pollIds = usePollIds()
    return <div>
        <h1>Polls</h1>
        <div>
            {pollIds.map(id => {
                return <Poll id={id} key={id} />
            })}
        </div>
    </div>
}

const Poll = ({ id }: { id: string }) => {
    const poll = usePoll(id)
    return <div>{poll.name}</div>
}

export default Polls