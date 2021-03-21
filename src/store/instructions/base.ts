import produce from "immer"
import { IInstructionOptions, Instruction } from "lib/produx"
import { IState } from 'store/state'

export default abstract class BaseInstruction<T extends IInstructionOptions> extends Instruction<IState, T> {
    public reduce(state: IState) {
        const updatedState = produce(state, draft => {
            this.mutate(draft)
        })
        if (updatedState !== state) {
            return { ...updatedState }
        }
        return state
    }
    public abstract mutate(state: IState): void
}
