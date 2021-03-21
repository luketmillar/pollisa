import React from 'react'
import NewQuestion from './NewQuestionButton'
import PollHeader from './PollHeader'
import QuestionList from './QuestionList'

interface IProps {
    onNewQuestion: () => void
}
const PollSummary = ({ onNewQuestion }: IProps) => {
    return <>
        <PollHeader />
        <div style={{ height: 16 }} />
        <QuestionList />
        <div style={{ height: 32 }} />
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}><NewQuestion onClick={onNewQuestion} /></div>
    </>
}

export default PollSummary