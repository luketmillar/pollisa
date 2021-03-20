import { Button } from 'components'
import React from 'react'

interface IProps {
    isSelected: boolean
    onClick?: () => void
}
const Option = ({ isSelected, onClick, children }: React.PropsWithChildren<IProps>) => {
    return <Button onClick={onClick} style={{ width: '100%', textAlign: 'left' }} variant={isSelected ? 'primary' : 'clear'}>{children}</Button>
}
export default Option