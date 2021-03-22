import repository from "repository"
import actions, { produx } from "store"

const addPollToCache = (id: string, data: any) => {
    actions.polls.add({
        id,
        created: data.created.toDate(),
        creator: data.creator,
        name: data.name,
        passcode: data.passcode,
        questions: data.questions
    })
}

export const subscribePolls = (userId: string) => {
    return repository.app.firestore().collection("polls").where("creator", "==", userId).onSnapshot(querySnapshot => {
        produx.transaction(() => {
            querySnapshot.forEach(doc => {
                addPollToCache(doc.id, doc.data())
            })
        })
    })
}

export const subscribePoll = (pollId: string, userId: string) => {
    return repository.app.firestore().collection("polls").doc(pollId).onSnapshot(querySnapshot => {
        addPollToCache(querySnapshot.id, querySnapshot.data())
    })
}