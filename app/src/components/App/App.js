import React, { Component } from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import logo from '../../logo.svg'
import './App.css'
import Login from '../Login/Login';
import Main from '../Main/Main';

class App extends Component {
  constructor() {
    super()
    this.state = {
      user: null
    }
  }

  componentDidMount() {
    const self = this
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        self.setState({ user })
      } else {
        self.setState({ user: null })
      }
    })
  }

  handleSignIn(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password).catch(error =>
      console.log(error)
    )
  }

  handleSignUp(email, password) {
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(error =>
      console.log(error)
    )
  }

  handleSignOut() {
    firebase.auth().signOut().catch(error =>
      console.log(error)
    )
  }

  render() {
    const { user } = this.state

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> 
        {
          !user && (
            <Login signIn={ this.handleSignIn.bind(this) }
                signUp={ this.handleSignUp.bind(this) }/>
          )
        }
        {
          user && (
            <Main user={ user }
                signOut={ this.handleSignOut.bind(this) }/>
          )
        }
      </div>
    );
  }
}

export default App;
