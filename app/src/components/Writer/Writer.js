import React from 'react'

export default class extends React.Component {
  constructor() {
    super()
    this.state = {
      value: ''
    }
  } 

  handleChange(value) {
    this.setState({ value })
  }
  
  render() {
    const { value } = this.state

    return (
      <div className='row'>
        <input value={ value }
            onClick={ e => this.handleChange(e.target.value) }/>
        <button type='button' className='btn btn-primary'>
          send</button>
      </div>
    )
  }
}