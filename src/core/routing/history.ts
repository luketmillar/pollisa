import { createBrowserHistory, History } from 'history'

let history: History
export const getHistory = () => {
    if (history === undefined) {
        history = createBrowserHistory()
    }
    return history
}