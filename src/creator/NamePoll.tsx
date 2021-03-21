import { Button, Input } from 'components'
import React from 'react'

interface IProps {
    onCreate: (name: string) => Promise<void>
}
const NamePoll = ({ onCreate }: IProps) => {
    const [isCreating, setCreating] = React.useState(false)
    const [isValid, setValid] = React.useState(false)
    const handleSubmit = React.useCallback((e: React.FormEvent) => {
        e.preventDefault()
        const formData = new FormData(e.target as HTMLFormElement)
        const pollName = formData.get('name')?.toString()
        if (!pollName) {
            return false
        }
        setCreating(true)
        onCreate(pollName).then(() => setCreating(false))
    }, [onCreate])
    const onNameChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.value
        setValid(name.length > 0)
    }, [])
    return <>
        <h2>Name your poll</h2>
        <form style={{ display: 'contents' }} onSubmit={handleSubmit}>
            <Input name="name" style={{ width: '100%' }} placeholder="My wonderful poll" disabled={isCreating} onChange={onNameChange} />
            <div style={{ height: 8 }} />
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button disabled={!isValid || isCreating} type="submit" variant="primary">{isCreating ? 'Creating' : 'Create'}</Button>
            </div>
        </form>
    </>
}

export default NamePoll