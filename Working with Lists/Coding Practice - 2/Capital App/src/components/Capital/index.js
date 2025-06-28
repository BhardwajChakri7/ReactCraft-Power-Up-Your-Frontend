import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]
class Capitals extends Component {
  state = {capital: countryAndCapitalsList[0].country}

  onChangeCapital = event => {
    const capi = countryAndCapitalsList.find(
      eachCountry => eachCountry.id === event.target.value,
    )
    this.setState({capital: capi.country})
  }

  render() {
    const {capital} = this.state
    return (
      <div className="main-bg-container">
        <div className="sub-bg-container">
          <h1 className="main-heading">Countries And Capitals</h1>
          <form>
            <select
              name="country"
              id="country"
              required
              className="form-element"
              onChange={this.onChangeCapital}
            >
              {countryAndCapitalsList.map(eachCountry => (
                <option value={eachCountry.id} key={eachCountry.id}>
                  {eachCountry.capitalDisplayText}
                </option>
              ))}
            </select>
            <label className="label-element" htmlFor="country">
              {' '}
              is capital of which country?
            </label>
          </form>
          <h1 className="ans-heading-ele">{capital}</h1>
        </div>
      </div>
    )
  }
}
export default Capitals
