import { Button, Input } from 'components'
import React from 'react'
import { Router } from 'core'
import repository from 'repository'

const Home = () => {
    const [loadingUser, setLoadingUser] = React.useState(true)
    React.useEffect(() => {
        repository.signin().then(() => {
            setLoadingUser(false)
        })
    }, [])
    if (loadingUser) {
        return <div>loading</div>
    }
    return <div style={{ padding: 24 }}>
        <h1>Tadpoll</h1>
        <div style={{ height: 200 }} />
        <Button onClick={() => Router.navigate.goTo(Router.paths.creator.root)} style={{ width: '100%' }} variant='primary'>Create a poll</Button>
        <div style={{ height: 24 }} />
        <div style={{ textAlign: 'center' }}>or</div>
        <div style={{ height: 24 }} />
        <div style={{ display: 'flex', width: '100%' }}>
            <Input style={{ flex: 1 }} placeholder="Code" />
            <div style={{ width: 2 }} />
            <Button disabled variant="primary">Join</Button>
        </div>
    </div>
}

export default Home