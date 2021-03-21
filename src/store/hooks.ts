import React from 'react'
import { IModel } from "./state"
import { produx } from 'store'

const areEqual = <T>(a: T | undefined, b: T) => {
    const aType = typeof a
    const bType = typeof b
    if (a === undefined) {
        return false
    }
    if (aType !== bType) {
        return false
    }
    const type = aType
    if (type === 'object') {
        const aKeys = Object.keys(a)
        const bKeys = Object.keys(b)
        if (aKeys.length !== bKeys.length) {
            return false
        }
        for (let i = 0; i < aKeys.length; i++) {
            const key = aKeys[i]
            const aValue = (a as any)[key]
            const bValue = (b as any)[key]
            if (aValue !== bValue) {
                return false
            }
        }
        return true
    }
    return a === b
}

export const useProdux = <T>(fn: (model: IModel) => T) => {
    const stateRef = React.useRef<T | undefined>()
    const [state, setState] = React.useState<T>(() => fn(produx.getModel()))

    React.useEffect(() => {
        return produx.subscribe((model) => {
            const nextState = fn(model)
            if (!areEqual(stateRef.current, nextState)) {
                stateRef.current = nextState
                setState(nextState)
            }
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return state
}