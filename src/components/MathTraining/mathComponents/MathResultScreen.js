import React, { Component } from 'react'

export class MathResultScreen extends Component {


  render() {
    return (
      <div className='alert alert-primary'>
        <h3>Success: {this.props.stats.success}</h3>
        <h3>Error: {this.props.stats.error}</h3>
        <hr />
        <button className='btn btn-primary' onClick={this.props.onStart}>Repeat</button>
        <button className='btn btn-primary' onClick={this.props.nextLevel}>
          {this.props.level === 2 ? 'Play Again?' : 'Next Level'}
        </button>
      </div>
    )
  }
}

export default MathResultScreen
