// Write your code here
import './index.css'
import {Component} from 'react'

class Speedometer extends Component {
  state = {speed: 0}
  accelerateSpeed = () => {
    if (this.state.speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }
  applybrake = () => {
    if (this.state.speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }
  render() {
    const {speed} = this.state
    console.log(speed)
    return (
      <div className="main-bg-container">
        <h1 className="main-heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="mini-img"
        />
        <h1 className="sub-heading">Speed is {speed}mph</h1>
        <p className="mini-para">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button
            type="button"
            className="button-1"
            onClick={this.accelerateSpeed}
          >
            Accelerate
          </button>
          <button type="button" className="button-2" onClick={this.applybrake}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
