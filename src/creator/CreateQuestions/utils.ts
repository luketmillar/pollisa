import { useProdux } from "store/hooks"
import { usePollId } from "./Context"

export const usePoll = () => {
    const pollId = usePollId()
    return useProdux(model => model.polls.byId[pollId])
}

export const displayFriendly = (passcode: string) => {
    return passcode.slice(0, 3) + '-' + passcode.slice(3)
}