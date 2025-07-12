import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  state = {cryptocurrencies: [], isLoading: true}

  componentDidMount() {
    this.getCryptoCurrenciesLists()
  }

  getCryptoCurrenciesLists = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(eachItem => ({
      currencyName: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
      id: eachItem.id,
      currencyLogo: eachItem.currency_logo,
    }))
    this.setState({cryptocurrencies: updatedData, isLoading: false})
  }

  toGetCyptoCurrencyOutput = () => {
    const {cryptocurrencies} = this.state
    return (
      <div>
        <h1 className="main-heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="main-img"
        />
        <div className="crypto-table">
          <div className="crypto-header">
            <p className="coin">Coin Type</p>
            <p className="usd">USD</p>
            <p className="euro">EURO</p>
          </div>
          <ul>
            {cryptocurrencies.map(eachCrypto => (
              <CryptocurrencyItem key={eachCrypto.id} eachCrypto={eachCrypto} />
            ))}
          </ul>
        </div>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          this.toGetCyptoCurrencyOutput()
        )}
      </div>
    )
  }
}
export default CryptocurrenciesList
