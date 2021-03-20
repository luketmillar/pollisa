import React from 'react'
import * as Models from 'models'
import Option from './Option'
import { Prompt, Subprompt } from './Prompt'

interface IProps {
    question: Models.Questions.IRadioQuestion
}
const RadioQuestion = ({ question }: IProps) => {
    const [selected, setSelected] = React.useState<number | undefined>()

    return <>
        <Prompt>{question.prompt}</Prompt>
        <div style={{ height: 4 }} />
        <Subprompt>Select many</Subprompt>
        <div style={{ height: 16 }} />
        {question.options.map((option, i) => {
            return <React.Fragment key={i}>
                {i > 0 && <div style={{ height: 8 }} />}
                <Option isSelected={selected === i} onClick={() => setSelected(i)}>{option.label}</Option>
            </React.Fragment>
        })}
    </>
}

export default RadioQuestion