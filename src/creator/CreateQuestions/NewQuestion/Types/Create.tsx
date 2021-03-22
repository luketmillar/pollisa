import React from 'react'
import * as Models from 'models'
import NewTrueFalse from './NewTrueFalse'
import NewMultipleChoice from './NewMultipleChoice'
import { types } from '../newQuestionTypes'
import NewFreeResponse from './NewFreeResponse'

interface IProps {
    type: types
    onCreate: (question: Models.Question) => void
}
const Create = ({ type, onCreate }: IProps) => {
    switch (type) {
        case 'mutliple-choice':
            return <NewMultipleChoice onCreate={onCreate} />
        case 'free-response':
            return <NewFreeResponse onCreate={onCreate} />
        case 'true-false':
        default:
            return <NewTrueFalse onCreate={onCreate} />
    }
}

export default Create