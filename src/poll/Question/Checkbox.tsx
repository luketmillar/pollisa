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

const useCheckboxSelection = (count: number): [boolean[], (i: number) => boolean[]] => {
    const [selected, setSelected] = React.useState<boolean[]>(() => createDefaultSelection(count))
    const toggle = (i: number) => {
        const newSelection = [...selected]
        newSelection[i] = !newSelection[i]
        setSelected(newSelection)
        return newSelection
    }
    return [selected, toggle]
}

interface IProps {
    question: Models.Questions.ICheckboxQuestion
    onAnswered: (value: boolean[]) => void
}
const CheckboxQuestion = ({ question, onAnswered }: IProps) => {
    const [selection, toggleOption] = useCheckboxSelection(question.options.length)

    const updateOption = (i: number) => {
        const updatedValue = toggleOption(i)
        onAnswered(updatedValue)
    }

    return <>
        <Prompt>{question.prompt}</Prompt>
        <div style={{ height: 4 }} />
        <Subprompt>Select many</Subprompt>
        <div style={{ height: 16 }} />
        {question.options.map((option, i) => {
            return <React.Fragment key={i}>
                {i > 0 && <div style={{ height: 8 }} />}
                <Option isSelected={selection[i]} onClick={() => updateOption(i)}>{option.label}</Option>
            </React.Fragment>
        })}
    </>
}

export default CheckboxQuestion