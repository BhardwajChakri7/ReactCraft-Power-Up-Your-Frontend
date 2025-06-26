// Write your code here
import './index.css'
import {Component} from 'react'

class RandomNumberGenerator extends Component {
  state = {value: 0}

  generateRandom = () => {
    this.setState({value: Math.floor(Math.random() * 101)})
  }

  render() {
    const {value} = this.state
    return (
      <div className="main-bg-container">
        <div className="sub-bg-container">
          <h1 className="main-heading">Random Number</h1>
          <p className="main-para">
            Generate a random number in the
            <br /> range of 0 to 100
          </p>
          <button
            type="button"
            className="main-button"
            onClick={this.generateRandom}
          >
            Generate
          </button>
          <p className="count-values">{value}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
