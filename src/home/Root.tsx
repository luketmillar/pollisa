import React from 'react'
import * as Models from 'models'
import * as Poll from 'poll'
import { Button } from 'components'

const question: Models.Questions.ITrueFalseQuestion = {
    id: '1',
    type: 'true-false',
    prompt: 'Are you tired or nah?'
}

const Home = () => {
    return <div>
        <Button variant="primary">Sign in</Button>
        <div style={{ height: 200 }} />
        <Poll.Questions.TrueFalse question={question} />
    </div>
}

export default Home