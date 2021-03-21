import type { IInstructionOptions, Listener, Middleware, ModelCreator } from './types'
import { Instruction, InstructionOptions } from './types'
import * as Types from './types'
export { Types }

export default class Produx<S, M> {
    private listeners: Array<Listener<M, S>> = []
    private state: S
    private model: M
    private inTransaction = false
    private middleware: Array<Middleware<S, M>>
    private modelCreator: ModelCreator<M, S>
    constructor(initialState: S, modelCreator: ModelCreator<M, S>, middleware: Array<Middleware<S, M>> = []) {
        this.state = initialState
        this.model = modelCreator(this.state)
        this.middleware = middleware
        this.modelCreator = modelCreator
    }

    public getState = () => {
        return this.state
    }

    public getModel = () => {
        return this.model
    }

    public subscribe = (listener: Listener<M, S>): (() => void) => {
        this.listeners.push(listener)
        return () => {
            this.listeners = this.listeners.filter(l => l !== listener)
        }
    }

    public dispatch<T extends Instruction<S>>(type: new (...args: any[]) => T, options: InstructionOptions<S, T>) {
        const instruction = new type(options)
        const previousState = this.state
        const nextState = instruction.reduce(previousState)
        const stateChanged = previousState !== nextState
        this.state = nextState
        this.middleware.forEach(m => m.afterInstruction(this, instruction, type, previousState, nextState))
        if (!stateChanged) {
            return
        }
        if (!this.inTransaction) {
            this.triggerChange()
        }
    }

    public transaction(fn: () => void) {
        const isTopLevelTransactions = !this.inTransaction
        const shouldCloseOnFinish = isTopLevelTransactions
        this.inTransaction = true

        this.middleware.forEach(m => m.beginTransaction())
        fn()
        this.middleware.forEach(m => m.endTransaction())

        if (shouldCloseOnFinish) {
            this.inTransaction = false
            this.triggerChange()
        }
    }

    private triggerChange = () => {
        this.model = this.modelCreator(this.state)
        this.listeners.forEach(l => l(this.model, this.state))
    }
}

export { Instruction }
export type { IInstructionOptions, Listener }
