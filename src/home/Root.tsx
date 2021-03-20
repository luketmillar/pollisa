import React from 'react'
import * as Models from 'models'
import * as Poll from 'poll'

const question: Models.Questions.ICheckboxQuestion = {
    id: '1',
    type: 'checkboxes',
    prompt: 'What meals do you eat?',
    options: [
        {
            label: 'Breakfast',
            value: 'breakfast'
        },
        {
            label: 'Lunch',
            value: 'lunch'
        },
        {
            label: 'Dinner',
            value: 'dinner'
        },
        {
            label: 'Dessert',
            value: 'dessert'
        },
    ]
}

const Home = () => {
    return <div>
        <div style={{ height: 200 }} />
        <Poll.Questions.QuestionSection question={question} />
    </div>
}

export default Home