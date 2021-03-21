import Produx from "lib/produx"
import Logger from "./logger"
import { initialState, IState } from './state'

import * as Instructions from './instructions'
import * as Models from 'models'

export const produx = new Produx(initialState, (state) => state, [new Logger<IState, IState>()])

const actions = {
    polls: {
        add: (poll: Models.Poll) => produx.dispatch(Instructions.Polls.AddPoll, { poll }),
        remove: (id: string) => produx.dispatch(Instructions.Polls.RemovePoll, { id }),
        addQuestion: (pollId: string, question: Models.Question) => produx.dispatch(Instructions.Polls.AddQuestion, { pollId, question }),
    }
}


export default actions