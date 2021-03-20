import React from 'react'
import * as Models from 'models'
import TrueFalse from './TrueFalse'
import Radio from './Radio'
import Checkbox from './Checkbox'
import ShortResponse from './ShortResponse'
import Next from './Next'

interface IProps {
    question: Models.Question
}
const QuestionSection = ({ question }: IProps) => {
    const [answered, setAnswered] = React.useState(false)
    return <>
        <Question question={question} onAnswered={() => setAnswered(true)} />
        <div style={{ height: 16 }} />
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}><Next disabled={!answered} /></div>
    </>
}

const Question = ({ question, ...rest }: IProps & { onAnswered: () => void }) => {
    switch (question.type) {
        case 'true-false':
            return <TrueFalse question={question} {...rest} />
        case 'radio':
            return <Radio question={question} {...rest} />
        case 'checkboxes':
            return <Checkbox question={question} {...rest} />
        case 'short-response':
            return <ShortResponse question={question} {...rest} />
        default:
            return <div>{question.prompt}</div>
    }
}

export default QuestionSection