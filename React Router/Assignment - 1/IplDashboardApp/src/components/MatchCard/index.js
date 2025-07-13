import './index.css'

const MatchCard = props => {
  const {eachItem} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    matchStatus,
  } = eachItem
  return (
    <li className="each-list-container">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="match-card-logo"
      />
      <p className="match-card-heading">{competingTeam}</p>
      <p className="match-card-para">{result}</p>
      <p>{matchStatus}</p>
    </li>
  )
}
export default MatchCard
