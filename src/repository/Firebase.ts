import fbApp from 'firebase/app'
import firebase from 'firebase'
import config from './configuration'

let app: fbApp.app.App
if (firebase.apps.length === 0) {
    app = fbApp.initializeApp(config)
} else {
    app = firebase.apps[0]
}

class Firebase {
    constructor() {
        firebase.analytics()
    }

    public get app() {
        return app
    }

    public signin() {
        return app.auth().signInAnonymously()
    }

    public get userId() {
        return app.auth().currentUser?.uid
    }
}

const repository = new Firebase()

export default repository