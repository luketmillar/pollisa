import React from 'react'
import styled from 'styled-components'
import { displayFriendly, usePoll } from '../utils'

const PasscodeBox = styled.div`
    border: 2px solid #aaa;
    border-radius: 5px;
    padding: 8px 10px;
`
const PasscodeText = styled.div`
    color: #555;
    font-size: 20px;
    font-weight: 700;
`
const Passcode = ({ passcode }: { passcode: string }) => {
    return <PasscodeBox>
        <PasscodeText>{displayFriendly(passcode)}</PasscodeText>
    </PasscodeBox>
}

const PollHeader = () => {
    const poll = usePoll()
    return <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h1>{poll.name}</h1>
        <Passcode passcode={poll.passcode} />
    </div>
}

export default PollHeader