// Write your code here
import './index.css'
import {Component} from 'react'

class EvenOddApp extends Component {
  state = {count: 0}

  increaseNumber = () => {
    this.setState(prevState => ({
      count: prevState.count + Math.floor(Math.random() * 101),
    }))
  }

  render() {
    const {count} = this.state
    const evenOdd = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="main-bg-container">
        <div className="sub-bg-container">
          <h1 className="main-heading">Count {count}</h1>
          <p className="sub-para1">Count is {evenOdd}</p>
          <button
            type="button"
            className="main-button"
            onClick={this.increaseNumber}
          >
            Increment
          </button>
          <p className="sub-para2">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
