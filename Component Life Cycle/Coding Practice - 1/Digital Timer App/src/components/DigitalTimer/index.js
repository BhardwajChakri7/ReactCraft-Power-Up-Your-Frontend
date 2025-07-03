import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  state = {
    isRunning: false,
    timerLimit: 25,
    timeRemaining: 25 * 60,
    initialLimit: 25,
  }

  componentWillUnmount() {
    clearInterval(this.timerInterval)
  }

  onStartPause = () => {
    const {isRunning} = this.state

    if (isRunning) {
      clearInterval(this.timerInterval)
    } else {
      this.timerInterval = setInterval(this.tick, 1000)
    }

    this.setState(prev => ({isRunning: !prev.isRunning}))
  }

  onReset = () => {
    clearInterval(this.timerInterval)
    this.setState({
      isRunning: false,
      timerLimit: 25,
      timeRemaining: 25 * 60,
      initialLimit: 25,
    })
  }

  tick = () => {
    const {timeRemaining} = this.state
    if (timeRemaining === 0) {
      clearInterval(this.timerInterval)
      this.setState({isRunning: false})
    } else {
      this.setState(prev => ({
        timeRemaining: prev.timeRemaining - 1,
      }))
    }
  }

  increaseLimit = () => {
    this.setState(prev => ({
      timerLimit: prev.timerLimit + 1,
      timeRemaining: (prev.timerLimit + 1) * 60,
    }))
  }

  decreaseLimit = () => {
    this.setState(prev => {
      if (prev.timerLimit > 1) {
        return {
          timerLimit: prev.timerLimit - 1,
          timeRemaining: (prev.timerLimit - 1) * 60,
        }
      }
      return null
    })
  }

  formatTime = () => {
    const {timeRemaining} = this.state
    const minutes = Math.floor(timeRemaining / 60)
    const seconds = timeRemaining % 60
    const paddedSec = seconds < 10 ? `0${seconds}` : seconds
    return `${minutes}:${paddedSec}`
  }

  render() {
    const {isRunning, timerLimit, timeRemaining} = this.state
    const timeDisplay = this.formatTime()

    const isButtonsDisabled = isRunning || timeRemaining === 0

    const playPauseIcon = isRunning
      ? 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
    const playPauseAlt = isRunning ? 'pause icon' : 'play icon'
    const playPauseText = isRunning ? 'Pause' : 'Start'

    return (
      <div className="app-bg">
        <h1 className="heading">Digital Timer</h1>
        <div className="timer-app-container">
          <div className="timer-container">
            <div className="timer-circle">
              <h1 className="time">{timeDisplay}</h1>
              <p className="status">{isRunning ? 'Running' : 'Paused'}</p>
            </div>
          </div>

          <div className="controls-container">
            <div className="buttons-container">
              <button className="btn" onClick={this.onStartPause} type="button">
                <img src={playPauseIcon} alt={playPauseAlt} className="icon" />
                <p className="btn-label">{playPauseText}</p>
              </button>

              <button className="btn" onClick={this.onReset} type="button">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                  alt="reset icon"
                  className="icon"
                />
                <p className="btn-label">Reset</p>
              </button>
            </div>

            <p className="limit-label">Set Timer Limit</p>
            <div className="limit-controls">
              <button
                className="adjust-btn"
                onClick={this.decreaseLimit}
                disabled={isButtonsDisabled}
                type="button"
              >
                -
              </button>
              <p className="limit-value">{timerLimit}</p>
              <button
                type="button"
                className="adjust-btn"
                onClick={this.increaseLimit}
                disabled={isButtonsDisabled}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
