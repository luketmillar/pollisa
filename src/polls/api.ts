import repository from "repository"
import actions from "store"

const addPollToCache = (id: string, data: any) => {
    actions.polls.add({
        id,
        creator: data.creator,
        name: data.name,
        passcode: data.passcode,
        questions: data.questions
    })
}

export const subscribePolls = (userId: string) => {
    return repository.app.firestore().collection("polls").where("creator", "==", userId).onSnapshot(querySnapshot => {
        querySnapshot.forEach(doc => {
            addPollToCache(doc.id, doc.data())
        })
    })
}