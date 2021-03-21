/* eslint-disable no-console */
import * as Types from 'lib/produx/types'

class Logger<S, M> extends Types.Middleware<S, M> {
    private transactionDepth = 0
    public afterInstruction(
        produx: Types.Produx<S, M>,
        instruction: Types.Instruction<S>,
        type: Types.InstructionType<S>,
        previousState: S,
        nextState: S
    ) {
        console.groupCollapsed(
            ` %cprodux %c${instruction.name}`,
            'color: #0DA9F4; font-weight: lighter',
            'color: black; font-weight: bold'
        )
        console.log('%cprev state ', 'color: #9E9E9E; font-weight: bold', previousState)
        console.log('%cinstruction', 'color: #0DA9F4; font-weight: bold', instruction.options)
        console.log('%cnext state ', 'color: #4CAF51; font-weight: bold', nextState)
        console.groupEnd()
    }
    public beginTransaction() {
        if (this.transactionDepth === 0) {
            console.group(
                ` %cprodux %ctransaction`,
                'color: #0DA9F4; font-weight: lighter',
                'color: #9E9E9E; font-weight: bold'
            )
        }
        this.transactionDepth++
    }
    public endTransaction() {
        this.transactionDepth--
        if (this.transactionDepth === 0) {
            console.groupEnd()
        }
    }
}

export default Logger
