const devConfig = {
    apiKey: "AIzaSyC9PMSB9NBHuweSNlJAIKYO90IfU3q3mNw",
    authDomain: "tadpoll-ad331.firebaseapp.com",
    projectId: "tadpoll-ad331",
    storageBucket: "tadpoll-ad331.appspot.com",
    messagingSenderId: "170299001310",
    appId: "1:170299001310:web:36a41093470940dd5db54f",
    measurementId: "G-8XLQD71RRW"
}

const prodConfig = {
    apiKey: "AIzaSyC9PMSB9NBHuweSNlJAIKYO90IfU3q3mNw",
    authDomain: "tadpoll-ad331.firebaseapp.com",
    projectId: "tadpoll-ad331",
    storageBucket: "tadpoll-ad331.appspot.com",
    messagingSenderId: "170299001310",
    appId: "1:170299001310:web:f9bbcb8d1ea75eec5db54f",
    measurementId: "G-6HM1H5JMW9"
}

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig

export default config