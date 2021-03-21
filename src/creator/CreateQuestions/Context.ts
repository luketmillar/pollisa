import React from 'react'

const Context = React.createContext('')

export const Provider = Context.Provider

export const usePollId = () => {
    const pollId = React.useContext(Context)
    return pollId
}