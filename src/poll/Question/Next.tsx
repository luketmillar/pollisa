import { Button } from 'components'
import React from 'react'

const Next = ({ ...rest }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
    return <Button variant='primary' {...rest}>Next</Button>
}

export default Next