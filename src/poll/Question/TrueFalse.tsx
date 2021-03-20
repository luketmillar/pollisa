import React from 'react'
import * as Models from 'models'
import { Button } from 'components'

interface IProps {
    question: Models.Questions.ITrueFalseQuestion
}
const TrueFalseQuestion = ({ question }: IProps) => {
    return <>
        <div>{question.prompt}</div>
        <Button variant="primary">True</Button>
        <div style={{ height: 8 }} />
        <Button variant="secondary">False</Button>
    </>
}

export default TrueFalseQuestion