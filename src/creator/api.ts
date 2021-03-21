import { v4 } from "uuid"
import { customAlphabet } from 'nanoid'
import * as Models from 'models'

const customPasscodeGen = customAlphabet('23456789ABCDEFGHJKMNPQRSTUVWXYZ', 6)

export const createPoll = (name: string): Promise<Models.Poll> => {
    return new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve({
                id: v4(),
                name,
                creator: v4(),
                passcode: customPasscodeGen()
            })
        }, 10)
    })
}


export const createQuestion = (pollId: string, question: Models.Question) => {
    return new Promise((resolve) => {
        window.setTimeout(() => {
            resolve(question)
        }, 10)
    })
}