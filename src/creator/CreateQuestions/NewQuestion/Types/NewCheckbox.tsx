import { Button, Input } from 'components'
import React from 'react'
import * as Models from 'models'
import { v4 } from 'uuid'
import PromptForm from './PromptForm'

const create = (prompt: string, options: Models.Questions.IOption[]): Models.Questions.ICheckboxQuestion => {
    return {
        id: v4(),
        type: 'checkboxes',
        prompt,
        options
    }
}

const newOption = () => ({ id: v4() })

const useOptions = () => {
    const [options, setOptions] = React.useState<Array<{ id: string }>>(() => [newOption()])

    const add = React.useCallback(() => {
        setOptions(options => ([...options, newOption()]))
    }, [])

    const remove = React.useCallback((index: number) => {
        setOptions(options => ([...options.slice(0, index), ...options.slice(index + 1)]))
    }, [])


    return {
        options,
        add,
        remove
    }
}

interface IProps {
    onCreate: (question: Models.Questions.ICheckboxQuestion) => void
}
const NewCheckbox = ({ onCreate }: IProps) => {
    const [prompt, setPrompt] = React.useState('')
    const handleOptionsCreated = React.useCallback((options: Models.Questions.IOption[]) => {
        onCreate(create(prompt, options))
    }, [onCreate, prompt])
    if (prompt === '') {
        return <PromptForm headline="What is your multiple choice prompt?" placeholder="Which of these are real?" action="Continue" onCreate={setPrompt} />
    }
    return <PickOptions prompt={prompt} onOptionsCreated={handleOptionsCreated} />
}

interface IOptionsProps {
    prompt: string
    onOptionsCreated: (options: Models.Questions.IOption[]) => void
}
const PickOptions = ({ prompt, onOptionsCreated }: IOptionsProps) => {
    const controller = useOptions()
    const handleSubmit = React.useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (controller.options.length === 0) {
            return false
        }
        const formData = new FormData(e.target as HTMLFormElement)
        const options: string[] = []
        for (let i = 0; i < controller.options.length; i++) {
            const option = formData.get(`option-${i}`)?.toString() ?? ''
            if (option !== '') {
                options.push(option)
            }
        }
        if (options.length === 0) {
            return false
        }
        onOptionsCreated(options.map(option => ({ value: option, label: option })))
    }, [onOptionsCreated, controller.options.length])
    const handleKeyDown = React.useCallback((e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            e.stopPropagation()
            controller.add()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [controller.add])
    return <form style={{ display: 'contents' }} onSubmit={handleSubmit}>
        <h3>{prompt}</h3>
        <div style={{ height: 8 }} />
        {controller.options.map((option, i) => {
            return <React.Fragment key={option.id}>
                <div style={{ width: '100%', display: 'flex' }}>
                    <Input autoFocus style={{ flex: 1 }} name={`option-${i}`} placeholder={`Option ${i + 1}`} onKeyDown={handleKeyDown} />
                    <div style={{ width: 2 }} />
                    <Button type="button" variant="primary" onClick={() => controller.remove(i)}>X</Button>
                </div>
                <div style={{ height: 8 }} />
            </React.Fragment>
        })}
        <Button type="button" style={{ width: '100%' }} variant="primary" onClick={controller.add}>Add option</Button>
        <div style={{ height: 32 }} />
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}><Button disabled={controller.options.length === 0} type="submit" variant="primary">Create</Button></div>
    </form>
}


export default NewCheckbox