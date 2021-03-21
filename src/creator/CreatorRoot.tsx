import React from 'react'
import CreatePoll from './CreatePoll'
import * as api from './api'

const CreatorRoot = () => {
    const handlecreate = (name: string) => {
        console.log('creating poll', name)
        return api.createPoll(name).then(poll => {
            console.log('created', poll)
        })
    }
    return <>
        <div style={{ height: 200 }} />
        <CreatePoll onCreate={handlecreate} />
    </>
}

export default CreatorRoot