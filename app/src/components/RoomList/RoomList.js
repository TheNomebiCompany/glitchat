import React from 'react'

export default ({ rooms, enterRoom }) => {
  const list = rooms.map(({ id, name }) => (
    <li key={ id } className='list-group-item'
        onClick={ () => enterRoom(id) }>
      { name }</li>
  ))
  
  return (
    <ul className='list-group'>
      { list }
    </ul>
  )
}