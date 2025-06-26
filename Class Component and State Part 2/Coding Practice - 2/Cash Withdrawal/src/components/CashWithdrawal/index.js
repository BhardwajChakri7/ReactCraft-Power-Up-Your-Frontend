// Write your code here
import {Component} from 'react'
import './index.css'

class CashWithdrawal extends Component {
  state = {count: 2000}

  fiftyCount = () => {
    this.setState(prevState => ({count: prevState.count - 50}))
  }

  hundredCount = () => {
    this.setState(prevState => ({count: prevState.count - 100}))
  }

  twohundredCount = () => {
    this.setState(prevState => ({count: prevState.count - 200}))
  }

  fivehundredCount = () => {
    this.setState(prevState => ({count: prevState.count - 500}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="main-bg-container">
        <div className="sub-bg-container">
          <div className="profile-details">
            <p className="account-symbaol">S</p>
            <p className="account-name">Sarah Williams</p>
          </div>
          <div className="amount-details">
            <p className="Account-balance">Your Balance</p>
            <div>
              <p className="balance-amount">{count}</p>
              <p className="currency-type">In Rupees</p>
            </div>
          </div>
          <div className="withdraw-container">
            <p className="withdraw-heading">Withdraw</p>
            <p className="withdraw-para">CHOOSE SUM (IN RUPEES)</p>
          </div>
          <ul className="button-container">
            <li>
              <button
                className="button-element-1"
                type="button"
                onClick={this.fiftyCount}
              >
                50
              </button>
            </li>
            <li>
              <button
                className="button-element-2"
                type="button"
                onClick={this.hundredCount}
              >
                100
              </button>
            </li>
            <li>
              <button
                className="button-element-1"
                type="button"
                onClick={this.twohundredCount}
              >
                200
              </button>
            </li>
            <li>
              <button
                className="button-element-2"
                type="button"
                onClick={this.fivehundredCount}
              >
                500
              </button>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
