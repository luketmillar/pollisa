import React from 'react'
import * as Models from 'models'
import RadioQuestion from 'poll/Question/Radio'

const question: Models.Questions.IRadioQuestion = {
    id: 'new-question',
    type: 'radio',
    prompt: 'What type of question?',
    options: Models.Questions.QuestionTypes.map(questionType => ({ label: questionType.name, value: questionType.type }))
}


interface IProps {
    onSelect: (type: Models.Questions.QuestionType) => void
}
const ChooseType = ({ onSelect }: IProps) => {
    return <RadioQuestion question={question} onAnswered={onSelect} />
}

export default ChooseType