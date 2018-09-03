import React from 'react'

export default class extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }
  
  render() {
    const { user, signOut } = this.props

    return (
      <div className='row navbar'>
        {
          user && (
            <div className='btn-group col-md-4'>
              <button type='button' className='btn btn-secondary' disabled>
                { user.email }</button>
              <button type='button' className='btn btn-secondary'
                  onClick={ () => signOut() }>
                sign out</button>
            </div>
          )
        }
        <h1 className={ `col-md-4${ user ? '' : ' offset-md-4' }` }>glitchat</h1>
      </div>
    )
  }
}