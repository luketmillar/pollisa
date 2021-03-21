import actions from 'store'
import * as api from './api'

const create = (name: string) => {
    return api.createPoll(name).then(poll => {
        actions.polls.add(poll)
        return poll.id
    })
}


const provider = {
    create
}

export default provider