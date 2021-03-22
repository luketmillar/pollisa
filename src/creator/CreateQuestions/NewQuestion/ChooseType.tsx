import React from 'react'
import * as Models from 'models'
import RadioQuestion from 'poll/Question/Radio'
import { options, types } from './newQuestionTypes'

const question: Models.Questions.IRadioQuestion = {
    id: 'new-question',
    type: 'radio',
    prompt: 'What type of question?',
    options: options
}

interface IProps {
    onSelect: (type: types) => void
}
const ChooseType = ({ onSelect }: IProps) => {
    return <RadioQuestion question={question} onAnswered={onSelect} />
}

export default ChooseType