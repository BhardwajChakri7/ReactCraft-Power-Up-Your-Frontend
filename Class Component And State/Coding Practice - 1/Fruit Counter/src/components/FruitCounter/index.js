// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mangoesCount: 0, bananasCount: 0}

  mangoCount = () => {
    this.setState(prevState => ({mangoesCount: prevState.mangoesCount + 1}))
  }

  bananaCount = () => {
    this.setState(prevState => ({bananasCount: prevState.bananasCount + 1}))
  }

  render() {
    const {mangoesCount, bananasCount} = this.state
    return (
      <div className="main-bg-container">
        <div className="sub-bg-container">
          <h1 className="main-heading">
            Bob ate <span className="count-numbers">{mangoesCount}</span>{' '}
            mangoes <span className="count-numbers">{bananasCount}</span>{' '}
            bananas
          </h1>
          <div className="sub-img-container">
            <div className="sub-bg">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="mini-img"
              />
              <button
                type="button"
                className="main-buttons"
                onClick={this.mangoCount}
              >
                Eat Mango
              </button>
            </div>
            <div className="sub-bg">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="mini-img"
              />
              <button
                type="button"
                className="main-buttons"
                onClick={this.bananaCount}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
