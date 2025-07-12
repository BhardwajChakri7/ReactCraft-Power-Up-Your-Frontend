import './index.css'

const CryptocurrencyItem = props => {
  const {eachCrypto} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = eachCrypto
  return (
    <li className="crypto-row">
      <div className="coin">
        <img src={currencyLogo} alt={currencyName} className="mini-logo" />
        <p>{currencyName}</p>
      </div>
      <p className="usd">{usdValue}</p>
      <p className="euro">{euroValue}</p>
    </li>
  )
}
export default CryptocurrencyItem
