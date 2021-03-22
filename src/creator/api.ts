import { v4 } from "uuid"
import { customAlphabet } from 'nanoid'
import * as Models from 'models'
import repository from "repository"
import { produx } from "store"

const customPasscodeGen = customAlphabet('23456789ABCDEFGHJKMNPQRSTUVWXYZ', 6)

export const createPoll = (name: string): Promise<Models.Poll> => {
    const id = v4()
    if (repository.userId === undefined) {
        return Promise.resolve<any>({})
    }
    const data = {
        name,
        created: new Date(),
        creator: repository.userId,
        passcode: customPasscodeGen(),
        questions: []
    }
    return repository.app.firestore().collection("polls").doc(id).set(data).then(() => {
        return {
            id,
            ...data
        }
    })
}


export const createQuestion = (pollId: string, question: Models.Question) => {
    const questions = produx.getModel().polls.byId[pollId].questions
    return repository.app.firestore().collection("polls").doc(pollId).update({ questions: [...questions, question] })
}