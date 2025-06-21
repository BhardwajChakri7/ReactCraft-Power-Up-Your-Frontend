// Write your code here
import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {
    count: 0,
  }

  buttonClicked = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }))
    // console.log(this.state.count)
  }

  render() {
    const {count} = this.state
    return (
      <div className="main-bg-container">
        <h1 className="main-heading">
          The Button has been clicked <br />
          <span className="count-ele">{count}</span> times
        </h1>
        <p className="main-para">Click the button to increase the count!</p>
        <button
          className="main-button"
          onClick={this.buttonClicked}
          type="button"
        >
          Click Me
        </button>
      </div>
    )
  }
}

export default ClickCounter
