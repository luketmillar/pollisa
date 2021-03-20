import React from 'react'
import * as Models from 'models'
import { Prompt } from './Prompt'
import { Input } from 'components'

interface IProps {
    question: Models.Questions.IShortResponse
    onAnswered: (value: string) => void
}
const ShortResponseQuestion = ({ question, onAnswered }: IProps) => {
    const [response, setResponse] = React.useState<string>('')

    const updateResponse = (value: string) => {
        setResponse(value)
        onAnswered(value)
    }

    return <>
        <Prompt>{question.prompt}</Prompt>
        <div style={{ height: 16 }} />
        <Input style={{ width: '100%' }} value={response} onChange={e => updateResponse(e.target.value)} placeholder={question.placeholder} />
    </>
}

export default ShortResponseQuestion