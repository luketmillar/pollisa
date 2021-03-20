import React from 'react'
import * as Models from 'models'
import Option from './Option'
import { Prompt, Subprompt } from './Prompt'

const createDefaultSelection = (count: number) => {
    const selection: boolean[] = []
    for (let i = 0; i < count; i++) {
        selection.push(false)
    }
    return selection
}

const useCheckboxSelection = (count: number): [boolean[], (i: number) => void] => {
    const [selected, setSelected] = React.useState<boolean[]>(() => createDefaultSelection(count))
    const toggle = (i: number) => {
        const newSelection = [...selected]
        newSelection[i] = !newSelection[i]
        setSelected(newSelection)
    }
    return [selected, toggle]
}

interface IProps {
    question: Models.Questions.ICheckboxQuestion
}
const CheckboxQuestion = ({ question }: IProps) => {
    const [selection, toggleOption] = useCheckboxSelection(question.options.length)

    return <>
        <Prompt>{question.prompt}</Prompt>
        <div style={{ height: 4 }} />
        <Subprompt>Select many</Subprompt>
        <div style={{ height: 16 }} />
        {question.options.map((option, i) => {
            return <React.Fragment key={i}>
                {i > 0 && <div style={{ height: 8 }} />}
                <Option isSelected={selection[i]} onClick={() => toggleOption(i)}>{option.label}</Option>
            </React.Fragment>
        })}
    </>
}

export default CheckboxQuestion