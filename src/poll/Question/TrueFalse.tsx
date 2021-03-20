import React from 'react'
import * as Models from 'models'
import Option from './Option'
import { Prompt } from './Prompt'

interface IProps {
    question: Models.Questions.ITrueFalseQuestion
    onAnswered: (value: boolean) => void
}
const TrueFalseQuestion = ({ question, onAnswered }: IProps) => {
    const [selected, setSelected] = React.useState<boolean | undefined>()
    const updateSelected = (value: boolean) => {
        setSelected(value)
        onAnswered(value)
    }
    return <>
        <Prompt>{question.prompt}</Prompt>
        <div style={{ height: 16 }} />
        <Option isSelected={selected === true} onClick={() => updateSelected(true)}>True</Option>
        <div style={{ height: 8 }} />
        <Option isSelected={selected === false} onClick={() => updateSelected(false)}>False</Option>
    </>
}

export default TrueFalseQuestion