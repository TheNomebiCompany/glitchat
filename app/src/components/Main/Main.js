import React from 'react'

export default ({ user, signOut }) => (
  <div>
    <p>{ `connecté avec ${ user.email }`}</p>
    <button type='button'
        onClick={ () => signOut() }>
      sign out</button>
  </div>
)