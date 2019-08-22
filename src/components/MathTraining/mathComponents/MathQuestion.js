import React, { Component } from 'react'

class MathQuestion extends Component {
  constructor(props) {
    super(props)
    const {from, to} = props.settings;
    this.state = {
      x: mtRand(from, to),
      y: mtRand(from, to),
      answer: null
    }
  }

  componentDidMount() {
    this.setState({
      answer: this.state.x + this.state.y
    })
  }

  onAnswer (number) {
    const message = `${this.state.x} + ${this.state.y} = ${this.state.answer}`;
    return () => {
      if(number === this.state.answer) {
        this.props.success(message)
      } else {
        this.props.error(message)
      }
    }
  }

  answer()  {
    const {range, variants} = this.props.settings;
    const goodAnswer = this.state.answer;
    const res = [goodAnswer];
    while (res.length < variants) {
      let randNum = mtRand(goodAnswer - range, goodAnswer + range)
      if(res.indexOf(randNum) === -1) {
        res.push(randNum);
      }
    }

    return res.sort(() => 0.5 - Math.random())
  }


  render() {
    //const answer1 = this.state.answer;
    return (
      <div className='alert alert-secondary'>
        <h3>{this.state.x} + {this.state.y} = ?</h3>
        <hr />
        <div className='buttons'>
          {this.answer().map((num, i) => 
            (
              <button
                data-value={num}
                style={{marginRight: '10px'}}
                key={i} className='btn btn-success'
                onClick={this.onAnswer(num)}>{num}
              </button>
            )
          )}
        </div>
      </div>
    )
  }
}


function mtRand(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

export default MathQuestion
