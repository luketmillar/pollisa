import * as Models from 'models'

export type PollsState = {
    byId: Record<string, Models.Poll>
}
export type QuestionsState = {
    byId: Record<string, Models.Question>
    byPoll: Record<string, string[]>
}
export type ResponsesState = {
    byId: Record<string, Models.Response>
    byQuestion: Record<string, string>
    byPoll: Record<string, string>
}


export interface IState {
    polls: PollsState
    questions: QuestionsState
    responses: ResponsesState
}

export const initialState: IState = {
    polls: {
        byId: {}
    },
    questions: {
        byId: {},
        byPoll: {}
    },
    responses: {
        byId: {},
        byQuestion: {},
        byPoll: {}
    }
}

export type IModel = IState