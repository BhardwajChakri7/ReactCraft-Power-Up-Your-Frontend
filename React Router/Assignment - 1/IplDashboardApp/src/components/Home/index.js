import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {teamCardsList: [], isLoading: true}

  componentDidMount() {
    this.getTeamCard()
  }

  getTeamCard = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()

    const formattedData = data.teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))

    this.setState({teamCardsList: formattedData, isLoading: false})
  }

  render() {
    const {teamCardsList, isLoading} = this.state

    return (
      <div className="home-bg-container">
        {isLoading ? (
          <div data-testid="loader" className="loader-container">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <>
            <div className="home-sub-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
                className="home-logo-img"
              />
              <h1 className="home-main-heading">IPL Dashboard</h1>
            </div>
            <ul className="ipl-teams-unordered-list">
              {teamCardsList.map(eachItem => (
                <TeamCard key={eachItem.id} teamCard={eachItem} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}
export default Home
