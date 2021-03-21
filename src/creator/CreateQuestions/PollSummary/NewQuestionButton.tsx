import { Button } from 'components'
import React from 'react'

const NewQuestion = ({ onClick }: { onClick: React.MouseEventHandler }) => {
    return <Button onClick={onClick} variant="primary">Add question</Button>
}

export default NewQuestion