import React from 'react'
import Writer from '../Writer/Writer'

export default ({ messages }) => {
  console.log(messages);
  const messagesList = messages.map(message => (
    <div key={ message.user.id }>
      { message.value }</div>
  ))

  return (
    <div className='container'>
      <Writer />
      { messagesList }
    </div>
  )
}