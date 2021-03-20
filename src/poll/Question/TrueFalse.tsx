import React from 'react'
import * as Models from 'models'
import Option from './Option'
import { Prompt } from './Prompt'

interface IProps {
    question: Models.Questions.ITrueFalseQuestion
}
const TrueFalseQuestion = ({ question }: IProps) => {
    const [selected, setSelected] = React.useState<boolean | undefined>()
    return <>
        <Prompt>{question.prompt}</Prompt>
        <div style={{ height: 16 }} />
        <Option isSelected={selected === true} onClick={() => setSelected(true)}>True</Option>
        <div style={{ height: 8 }} />
        <Option isSelected={selected === false} onClick={() => setSelected(false)}>False</Option>
    </>
}

export default TrueFalseQuestion