import React from 'react'
import * as Models from 'models'
import ChooseType from './ChooseType'
import Create from './Types/Create'
import { types } from './newQuestionTypes'

interface IProps {
    onCreate: (question: Models.Question) => void
}
const NewQuestion = ({ onCreate }: IProps) => {
    const [type, setType] = React.useState<types | undefined>()
    if (type) {
        return <Create type={type} onCreate={onCreate} />
    }
    return <ChooseType onSelect={setType} />

}

export default NewQuestion