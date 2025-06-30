// // Write your code herethis.setState({
// import {Component} from 'react'
// import './index.css'

// class CoinToss extends Component {
//   state = {
//     totalCount: 0,
//     headCount: 0,
//     tailCount: 0,
//     activeImg: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
//   }

//   coinTossed = () => {
//     const tossResult = Math.floor(Math.random() * 2)

//     tossResult === 0
//       ? this.setState(prevState => ({totalCount: prevState.totalCount + 1}), {
//           activeImg: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
//         })
//       : this.setState(prevState => ({totalCount: prevState.totalCount + 1}), {
//           activeImg: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
//         })
//   }

//   render() {
//     const {totalCount, headCount, tailCount, activeImg} = this.state

//     return (
//       <div className="main-bg-container">
//         <div className="sub-bg-container">
//           <h1 className="main-heading">Coin Toss Game</h1>
//           <p className="main-para">Heads (or) Tails</p>
//           <img src={activeImg} alt="heads img" className="coin-img" />
//           <button
//             type="button"
//             className="main-button"
//             onClick={this.coinTossed}
//           >
//             Toss Coin
//           </button>
//           <div className="count-details">
//             <p className="totalCount">Total: {totalCount}</p>
//             <p className="headsCount">Heads: {headCount}</p>
//             <p className="tailsCount">Tails: {tailCount}</p>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }
// export default CoinToss

import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    totalCount: 0,
    headCount: 0,
    tailCount: 0,
    activeImg: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  coinTossed = () => {
    const tossResult = Math.floor(Math.random() * 2)

    if (tossResult === 0) {
      this.setState(prevState => ({
        totalCount: prevState.totalCount + 1,
        headCount: prevState.headCount + 1,
        activeImg: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      }))
    } else {
      this.setState(prevState => ({
        totalCount: prevState.totalCount + 1,
        tailCount: prevState.tailCount + 1,
        activeImg: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      }))
    }
  }

  render() {
    const {totalCount, headCount, tailCount, activeImg} = this.state

    return (
      <div className="main-bg-container">
        <div className="sub-bg-container">
          <h1 className="main-heading">Coin Toss Game</h1>
          <p className="main-para">Heads (or) Tails</p>
          <img src={activeImg} alt="toss result" className="coin-img" />
          <button
            type="button"
            className="main-button"
            onClick={this.coinTossed}
          >
            Toss Coin
          </button>
          <div className="count-details">
            <p className="totalCount">Total: {totalCount}</p>
            <p className="headsCount">Heads: {headCount}</p>
            <p className="tailsCount">Tails: {tailCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
