import React, { Component } from 'react'
import MathStartScreen from './mathComponents/MathStartScreen'
import MathMessage from './mathComponents/MathMessage'
import MathQuestion from './mathComponents/MathQuestion'
import MathResultScreen from './mathComponents/MathResultScreen'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import style from './mathTraining.css'

export class MathTraining extends Component {
  constructor(props) {
    super(props)

    this.state = {
      screen: 'start',
      message: '',
      isCorrectAnswer: false,
      stats: {
        success: 0,
        error: 0
      },
      questMax: 3,
      level: 0,
      levels: [
        {
          from: 10,
          to: 20,
          range: 5,
          variants: 2
        },
        {
          from: 100,
          to: 200,
          range: 20,
          variants: 4
        },
        {
          from: 500,
          to: 999,
          range: 40,
          variants: 6
        }
      ]
    }
  }

  questDone = () => this.state.stats.success + this.state.stats.error;

  progressStyles = () => (this.questDone() / this.state.questMax) * 100

  onStart = () => this.setState({
    screen: 'question',
    stats: {
      success: 0,
      error: 0
    }
  })

  onNext = () => {
    if(this.questDone() < this.state.questMax) {
      this.setState({
        screen: 'question'
      })
    } else {
      this.setState({
        screen: 'results'
      })
    }
  }

  nextLevel = () => {
    if(this.state.level === 2) {
      this.setState({
        level: 0
      })
    } else {
      this.setState({
        level: this.state.level + 1
      })
    }
    this.onStart()
  }

  success = (message) => this.setState({
      screen: 'message',
      message: message,
      isCorrectAnswer: true,
      stats: {
        success: this.state.stats.success + 1,
        error: this.state.stats.error
      }
    })

  error = (message) => this.setState({
      screen: 'message',
      message: message,
      isCorrectAnswer: false,
      stats: {
        success: this.state.stats.success,
        error: this.state.stats.error + 1
      }
    })

  render() {
    return (
      <div>
        MathTraining Level {this.state.level +1}
        <hr />
        <div className="progress">
          <div className="progress-bar" style={{
            width: `${this.progressStyles()}%`
          }}></div>
        </div>
        <hr />
        <input
          placeholder='Chosse "+" or "-" or "*"'
        />
        <hr />
        <TransitionGroup className='mathContainer'>
          {
            this.state.screen === 'start' ? 
              <CSSTransition
                timeout={2000}
                classNames="fade"
              >
                <MathStartScreen onStart={this.onStart}></MathStartScreen>
              </CSSTransition>
            : this.state.screen === 'message' ? 
              <CSSTransition
                timeout={2000}
                classNames="fade"
              >
                <MathMessage params={this.state} isCorrectAnswer={this.state.isCorrectAnswer} message={this.state.message} onNext={this.onNext}></MathMessage>
                </CSSTransition>
            : this.state.screen === 'question' ?
              <CSSTransition
                timeout={2000}
                classNames="fade"
              >
                <MathQuestion settings={this.state.levels[this.state.level]} success={this.success} error={this.error}></MathQuestion>
              </CSSTransition>
            : this.state.screen === 'results' ?
              <MathResultScreen nextLevel={this.nextLevel} onStart={this.onStart} stats={this.state.stats} level={this.state.level}></MathResultScreen>
            : <div>Unknown screen</div>
          }
        </TransitionGroup>
        <hr />
        {/* <MathStartScreen handleScreenChange={this.handleScreenChange}></MathStartScreen>
        <MathMessage></MathMessage>
        <MathQuestion></MathQuestion>
        <MathResultScreen></MathResultScreen> */}
      </div>
    )
  }
}

export default MathTraining
