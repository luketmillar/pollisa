import Question from './Question'

export interface IPoll {
    id: string
    created: Date
    name: string
    creator: string
    passcode: string
    questions: Question[]
}