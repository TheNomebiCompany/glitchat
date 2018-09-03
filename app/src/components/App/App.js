import React, { Component } from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import './App.css'
import Login from '../Login/Login'
import Navbar from '../Navbar/Navbar'
import RoomList from '../RoomList/RoomList'
import roomListMoqup from './roomList.moqup'
import Room from '../Room/Room';
import roomsMoqup from './rooms.moqup';

class App extends Component {
  constructor() {
    super()
    this.state = {
      user: null,
      view: null,
      roomId: null,
      room: null
    }
  }

  componentDidMount() {
    const self = this
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        self.setState({ 
          user,
          view: 'list'
        })
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

  handleRoomEnter(roomId) {
    // todo : replace avec l'appel API
    this.setState({
      view: 'room',
      roomId,
      room: roomsMoqup[roomId]
    })
  }

  handleRoomLeave() {
    this.setState({
      view: 'list',
      roomId: null
    })
  }

  render() {
    const { user, view, room } = this.state

    return (
      <div className='app container'>
        <Navbar user={ user }
            signOut={ this.handleSignOut.bind(this) }/>
        <div className='main container'>
          {
            !user ? (
              <Login signIn={ this.handleSignIn.bind(this) }
                  signUp={ this.handleSignUp.bind(this) }/>
            ) : view === 'list' ? (
              <RoomList rooms={ roomListMoqup }
                  enterRoom={ this.handleRoomEnter.bind(this) }/>
            ) : (
              <Room { ...room } />
            )
          }
        </div>
      </div>
    );
  }
}

export default App;
