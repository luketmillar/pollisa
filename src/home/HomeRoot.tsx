import { Button, Input } from 'components'
import React from 'react'

const Home = () => {
    return <div style={{ padding: 24 }}>
        <h1>Tadpoll</h1>
        <div style={{ height: 200 }} />
        <Button style={{ width: '100%' }} variant='primary'>Create a poll</Button>
        <div style={{ height: 24 }} />
        <div style={{ textAlign: 'center' }}>or</div>
        <div style={{ height: 24 }} />
        <div style={{ display: 'flex' }}>
            <Input style={{ width: 190 }} placeholder="Code" />
            <div style={{ width: 4, flexShrink: 0 }} />
            <Button style={{ flexShrink: 0 }} disabled variant="primary">Join</Button>
        </div>
    </div>
}

export default Home