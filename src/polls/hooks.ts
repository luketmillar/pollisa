import repository from "repository"
import { useProdux } from "store/hooks"

export const usePollIds = () => {
    const userId = repository.userId
    return useProdux(model => {
        const polls = Object.values(model.polls.byId)
        return polls.filter(poll => poll.creator === userId).map(poll => poll.id)
    })
}

export const usePoll = (id: string) => {
    return useProdux(model => model.polls.byId[id])
}