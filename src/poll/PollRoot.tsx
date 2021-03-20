import React from 'react'
import { useParams } from 'react-router'

const PollRoot = () => {
    const { pollId } = useParams<{ pollId: string }>()
    return <div>Poll: {pollId}</div>
}

export default PollRoot