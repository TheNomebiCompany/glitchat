import React from 'react'

export default class extends React.Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }
  }
  
  handleEmailChange(email) {
    this.setState({ email })
  }

  handlePasswordChange(password) {
    this.setState({ password })
  }

  render() {
    const { signIn, signUp } = this.props
    const { email, password } = this.state
    console.log(this.props)

    return (
      <div>
        <input type='email'
            onChange={ e => this.handleEmailChange(e.target.value) }/>
        <input type='password'
            onChange={ e => this.handlePasswordChange(e.target.value) }/>
        <button type='button'
            onClick={ () => signIn(email, password) }>
          sign in</button>
        <button type='button'
            onClick={ () => signUp(email, password) }>
          sign up</button>
      </div>
    )
  }
}