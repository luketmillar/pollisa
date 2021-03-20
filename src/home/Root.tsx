import React from 'react'
import * as Models from 'models'
import * as Poll from 'poll'

const question: Models.Questions.IShortResponse = {
    id: '1',
    type: 'short-response',
    prompt: 'What meals do you eat?',
    placeholder: 'Meal'
}

const Home = () => {
    return <div>
        <div style={{ height: 200 }} />
        <Poll.Questions.ShortResponse question={question} />
    </div>
}

export default Home