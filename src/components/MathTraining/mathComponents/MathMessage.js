import React, { Component } from 'react'

export class MathMessage extends Component {

  render() {
    const {isCorrectAnswer, message} = this.props;
    return (
      <div className={isCorrectAnswer ? 'alert alert-info' : 'alert alert-danger'} style={{padding: '10px 15px'}}>
        <p>{ isCorrectAnswer ? 'Correct!' : 'Wrong!'}</p>
        <h2>{message}</h2>
        <button 
          className='btn btn-primary'
          onClick={this.props.onNext}
        >
          Continue
        </button>
      </div>
    )
  }
}

export default MathMessage