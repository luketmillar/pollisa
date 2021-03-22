import React from 'react'
import PromptForm from './PromptForm'
import * as Models from 'models'
import { v4 } from 'uuid'
import RadioQuestion from 'poll/Question/Radio'
import { Button } from 'components'

type ResponseType = 'short' | 'long'

const create = (prompt: string, responseType: ResponseType, placeholder: string): Models.Questions.IShortResponse | Models.Questions.ILongResponse => {
    return {
        id: v4(),
        type: responseType === 'short' ? 'short-response' : 'long-response',
        prompt,
        placeholder
    }
}

interface IProps {
    onCreate: (question: Models.Questions.IShortResponse | Models.Questions.ILongResponse) => void
}
const NewFreeResponse = ({ onCreate }: IProps) => {
    const [prompt, setPrompt] = React.useState('')
    const handleCreate = React.useCallback((responseType: ResponseType) => {
        onCreate(create(prompt, responseType, 'Your response'))
    }, [onCreate, prompt])
    if (prompt === '') {
        return <PromptForm headline="What is your question?" placeholder="e.g. What is your name?" action="Continue..." onCreate={setPrompt} />
    }
    return <PickResponseType onCreate={handleCreate} />
}

const question: Models.Questions.IRadioQuestion = {
    id: 'new-question',
    type: 'radio',
    prompt: 'What type of question?',
    options: [{ label: "Short", value: 'short' }, { label: "Long", value: 'long' }]
}

interface IResponseTypeProps {
    onCreate: (responseType: ResponseType) => void
}
const PickResponseType = ({ onCreate }: IResponseTypeProps) => {
    const [responseType, setResponseType] = React.useState<ResponseType | undefined>()
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!responseType) {
            return
        }
        onCreate(responseType)
    }
    return <form style={{ display: 'contents' }} onSubmit={handleSubmit}>
        <RadioQuestion question={question} onAnswered={setResponseType} />
        <div style={{ height: 8 }} />
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button disabled={responseType === undefined} variant="primary" type="submit">Create</Button>
        </div>
    </form>
}

export default NewFreeResponse