import * as Models from 'models'
import Instruction from "./base"
import { IState } from 'store/state'


export class AddPoll extends Instruction<{ poll: Models.Poll }> {
    public name = `polls/add/${this.options.poll.id}`
    public mutate(state: IState) {
        state.polls.byId[this.options.poll.id] = this.options.poll
    }
}

export class RemovePoll extends Instruction<{ id: string }> {
    public name = `polls/remove/${this.options.id}`
    public mutate(state: IState) {
        delete state.polls.byId[this.options.id]
    }
}