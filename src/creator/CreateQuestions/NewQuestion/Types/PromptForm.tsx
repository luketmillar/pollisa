import { Button, Input } from 'components'
import React from 'react'

interface IProps {
    headline: string
    placeholder: string
    action: string
    onCreate: (prompt: string) => void
}
const PromptForm = ({ headline, placeholder, action, onCreate }: IProps) => {
    const handleSubmit = React.useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.target as HTMLFormElement)
        const prompt = formData.get('prompt')?.toString() ?? ''
        if (prompt === '') {
            return false
        }
        onCreate(prompt)
    }, [onCreate])
    const [isValid, setIsValid] = React.useState(false)
    return <form style={{ display: 'contents' }} onSubmit={handleSubmit}>
        <h3>{headline}</h3>
        <Input style={{ width: '100%' }} name="prompt" placeholder={placeholder} onChange={e => setIsValid(e.target.value.length > 0)} />
        <div style={{ height: 8 }} />
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}><Button disabled={!isValid} type="submit" variant="primary">{action}</Button></div>
    </form>
}

export default PromptForm