import './index.css'
import {Component} from 'react'

class Counter extends Component {
  state = {count: 0}
  onIncrement = () => {
    this.setState(prevState => {
      console.log(`The Prevous State is ${prevState.count}`)
      return {count: prevState.count + 1}
    })
  }
  onDecrement = () => {
    this.setState(prevState => {
      console.log(`The Previous State is :${prevState.count}`)
      return {count: prevState.count - 1}
    })
  }
  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">Counter</h1>
        <p className="count">{count}</p>
        <div>
          <button className="button" onClick={this.onIncrement}>
            Increase
          </button>
          <button className="button" onClick={this.onDecrement}>
            Decrease
          </button>
        </div>
      </div>
    )
  }
}
export default Counter
