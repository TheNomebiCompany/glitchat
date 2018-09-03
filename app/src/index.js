import React from 'react'
import ReactDOM from 'react-dom'
import firebase from 'firebase/app'
import firebaseConfig from './firebase.config'
import './index.css'
import App from './components/App/App'
import registerServiceWorker from './registerServiceWorker'

firebase.initializeApp(firebaseConfig)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
