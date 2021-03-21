import Question from './Question'

export interface IPoll {
    id: string
    name: string
    creator: string
    passcode: string
    questions: Question[]
}