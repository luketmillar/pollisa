import React from 'react'
import * as Models from 'models'
import { Prompt } from './Prompt'
import { Input } from 'components'

interface IProps {
    question: Models.Questions.IShortResponse
}
const ShortResponseQuestion = ({ question }: IProps) => {
    const [response, setResponse] = React.useState<string>('')

    return <>
        <Prompt>{question.prompt}</Prompt>
        <div style={{ height: 16 }} />
        <Input style={{ width: '100%' }} value={response} onChange={e => setResponse(e.target.value)} placeholder={question.placeholder} />
    </>
}

export default ShortResponseQuestion