import React from 'react'
import { usePoll } from '../utils'

const QuestionList = () => {
    const poll = usePoll()
    if (poll.questions.length === 0) {
        return <div>No questions</div>
    } else {
        return <>{poll.questions.map(question => <div key={question.id}>{question.prompt}</div>)}</>
    }
}

export default QuestionList