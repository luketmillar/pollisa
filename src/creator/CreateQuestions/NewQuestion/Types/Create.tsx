import React from 'react'
import * as Models from 'models'
import NewTrueFalse from './NewTrueFalse'
import NewCheckbox from './NewCheckbox'

interface IProps {
    type: Models.Questions.QuestionType
    onCreate: (question: Models.Question) => void
}
const Create = ({ type, onCreate }: IProps) => {
    switch (type) {
        case 'checkboxes':
            return <NewCheckbox onCreate={onCreate} />
        case 'true-false':
        default:
            return <NewTrueFalse onCreate={onCreate} />
    }
}

export default Create