import React from 'react'
import NamePoll from './NamePoll'

const CreatorRoot = () => {
    const handlecreate = (name: string) => {
        console.log('creating poll', name)
        return new Promise<void>(() => { })
    }
    return <>
        <div style={{ height: 200 }} />
        <NamePoll onCreate={handlecreate} />
    </>
}

export default CreatorRoot