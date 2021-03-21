import { Button, Input } from 'components'
import React from 'react'
import * as Models from 'models'
import { v4 } from 'uuid'

const create = (prompt: string): Models.Questions.ITrueFalseQuestion => {
    return {
        id: v4(),
        type: 'true-false',
        prompt
    }
}

interface IProps {
    onCreate: (question: Models.Questions.ITrueFalseQuestion) => void
}
const NewTrueFalse = ({ onCreate }: IProps) => {
    const handleSubmit = React.useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.target as HTMLFormElement)
        const prompt = formData.get('prompt')?.toString() ?? ''
        if (prompt === '') {
            return false
        }
        onCreate(create(prompt))
    }, [onCreate])
    return <form style={{ display: 'contents' }} onSubmit={handleSubmit}>
        <h3>What is your true/false question?</h3>
        <Input style={{ width: '100%' }} name="prompt" placeholder="e.g. The sky is green" />
        <div style={{ height: 8 }} />
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}><Button type="submit" variant="primary">Create</Button></div>
    </form>
}

export default NewTrueFalse