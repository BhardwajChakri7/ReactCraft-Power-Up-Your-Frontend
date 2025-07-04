import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {mainTimer: 0}

  timeFormat = () => {
    const {mainTimer} = this.state
    const mainMinutes = Math.floor(mainTimer / 60)
    const mainSeconds = mainTimer % 60
    const paddedSec = mainSeconds < 10 ? `0${mainSeconds}` : mainSeconds
    return `0${mainMinutes}:${paddedSec}`
  }

  startTimer = () => {
    this.timerId = setInterval(this.tick, 1000)
  }

  stopTimer = () => {
    clearInterval(this.timerId)
  }

  tick = () => {
    this.setState(prevState => ({mainTimer: prevState.mainTimer + 1}))
  }

  resetTimer = () => {
    this.setState({mainTimer: 0})
  }

  render() {
    const displatTimer = this.timeFormat()
    return (
      <div className="main-bg-contianer">
        <h1 className="main-heading">Stopwatch</h1>
        <div className="sub-bg-contianer">
          <div className="side-by-side">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="timer-img"
            />
            <p className="sub-para">Timer</p>
          </div>
          <h1 className="main-timer">{displatTimer}</h1>
          <div className="button-container">
            <button
              type="button"
              className="startButton"
              onClick={this.startTimer}
            >
              Start
            </button>
            <button
              type="button"
              className="stopButton"
              onClick={this.stopTimer}
            >
              Stop
            </button>
            <button
              type="button"
              className="resetButton"
              onClick={this.resetTimer}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
