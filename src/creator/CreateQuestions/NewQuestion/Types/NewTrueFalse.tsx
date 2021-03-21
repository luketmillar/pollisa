import React from 'react'
import PromptForm from './PromptForm'
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
    const handleCreate = React.useCallback((prompt: string) => {
        onCreate(create(prompt))
    }, [onCreate])
    return <PromptForm headline="What is your true/false question?" placeholder="e.g. The sky is green" action="Create" onCreate={handleCreate} />
}

export default NewTrueFalse