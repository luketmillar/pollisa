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


export class AddQuestion extends Instruction<{ pollId: string, question: Models.Question }> {
    public name = `question/add/${this.options.question.id}`
    public mutate(state: IState) {
        state.polls.byId[this.options.pollId].questions.push(this.options.question)
        state.questions.byId[this.options.question.id] = this.options.question
    }
}