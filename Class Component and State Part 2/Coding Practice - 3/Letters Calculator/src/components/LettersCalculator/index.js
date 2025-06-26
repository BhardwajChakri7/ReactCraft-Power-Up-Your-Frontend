import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  onChangeSearchInput = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="main-bg-container">
        <div>
          <h1 className="main-heading">
            Calculate the <br />
            Letters you
            <br /> enter
          </h1>
          <label htmlFor="phrase-element" className="phrase-label">
            Enter the phrase
            <br />
          </label>
          <input
            placeholder="Enter the phrase"
            className="input-element"
            type="text"
            id="phrase-element"
            onChange={this.onChangeSearchInput}
          />
          <p className="count-element">No.of letters: {count}</p>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            className="main-image"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
