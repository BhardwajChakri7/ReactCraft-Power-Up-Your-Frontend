import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LatestMatch from '../LatestMatch'

import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {
    mainImageUrl: '',
    latestMatchDetails: {},
    recentlyPlayedMatches: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamDetails()
  }

  getTeamDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const backendData = await response.json()
    const mainImage = backendData.team_banner_url
    const latestMatch = {
      umpires: backendData.latest_match_details.umpires,
      result: backendData.latest_match_details.result,
      manOfTheMatch: backendData.latest_match_details.man_of_the_match,
      id: backendData.latest_match_details.id,
      date: backendData.latest_match_details.date,
      venue: backendData.latest_match_details.venue,
      competingTeam: backendData.latest_match_details.competing_team,
      competingTeamLogo: backendData.latest_match_details.competing_team_logo,
      firstInnings: backendData.latest_match_details.first_innings,
      secondInnings: backendData.latest_match_details.second_innings,
      matchStatus: backendData.latest_match_details.match_status,
    }
    const recentlyPlayed = backendData.recent_matches.map(eachItem => ({
      umpires: eachItem.umpires,
      result: eachItem.result,
      manOfTheMatch: eachItem.man_of_the_match,
      id: eachItem.id,
      date: eachItem.date,
      venue: eachItem.venue,
      competingTeam: eachItem.competing_team,
      competingTeamLogo: eachItem.competing_team_logo,
      firstInnings: eachItem.first_innings,
      secondInnings: eachItem.second_innings,
      matchStatus: eachItem.match_status,
    }))
    this.setState({
      mainImageUrl: mainImage,
      latestMatchDetails: latestMatch,
      recentlyPlayedMatches: recentlyPlayed,
      isLoading: false,
    })
  }

  render() {
    const {mainImageUrl, latestMatchDetails, recentlyPlayedMatches, isLoading} =
      this.state
    console.log(recentlyPlayedMatches)
    return (
      <div>
        {isLoading ? (
          <div data-testid="loader" className="loader-container">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="team-matches-bg-container">
            <div className="team-matches-sub-bg-container">
              <img
                src={mainImageUrl}
                alt="team banner"
                className="team-banner"
              />
              <h1 className="team-matches-heading">Latest Matches</h1>
              <LatestMatch latestMatchDetails={latestMatchDetails} />
              <ul className="match-card-unordered-list">
                {recentlyPlayedMatches.map(eachItem => (
                  <MatchCard key={eachItem.id} eachItem={eachItem} />
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    )
  }
}
export default TeamMatches
