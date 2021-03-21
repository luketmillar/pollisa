import React from 'react'
import * as Models from 'models'
import Option from './Option'
import { Prompt, Subprompt } from './Prompt'

interface IProps {
    question: Models.Questions.IRadioQuestion
    onAnswered: (value: any) => void
}
const RadioQuestion = ({ question, onAnswered }: IProps) => {
    const [selected, setSelected] = React.useState<number | undefined>()

    const updateSelected = (index: number) => {
        setSelected(index)
        onAnswered(question.options[index].value)
    }

    return <>
        <Prompt>{question.prompt}</Prompt>
        <div style={{ height: 4 }} />
        <Subprompt>Select one</Subprompt>
        <div style={{ height: 16 }} />
        {question.options.map((option, i) => {
            return <React.Fragment key={i}>
                {i > 0 && <div style={{ height: 8 }} />}
                <Option isSelected={selected === i} onClick={() => updateSelected(i)}>{option.label}</Option>
            </React.Fragment>
        })}
    </>
}

export default RadioQuestion