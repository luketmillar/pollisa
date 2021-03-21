import type Produx from './'
export type { Produx }

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IInstructionOptions { }
export type InstructionOptions<S, T extends Instruction<S>> = T extends Instruction<S, infer U>
    ? U
    : IInstructionOptions
export abstract class Instruction<S, T extends IInstructionOptions = IInstructionOptions> {
    public abstract name: string
    public readonly options: T
    constructor(options: T) {
        this.options = options
    }
    public abstract reduce(state: S): S
}
export type Listener<M, S> = (model: M, state: S) => void
export type Dispatch<S> = (instruction: Instruction<S>) => void
export type InstructionType<S> = new (...args: any[]) => Instruction<S>
export type ModelCreator<M, S> = (state: S) => M

export abstract class Middleware<S, M> {
    public abstract afterInstruction(
        produx: Produx<S, M>,
        instruction: Instruction<S>,
        type: InstructionType<S>,
        previousState: S,
        nextState: S
    ): void
    public abstract beginTransaction(): void
    public abstract endTransaction(): void
}
