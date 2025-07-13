import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
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
  } = latestMatchDetails
  return (
    <div className="latest-match-bg-container">
      <div className="first-container">
        <p className="latest-heading">{competingTeam}</p>
        <p className="latest-date">{date}</p>
        <p className="latest-venue">{venue}</p>
        <p className="latest-result">{result}</p>
      </div>
      <div className="second-container">
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="latest-match-logo"
        />
      </div>
      <div className="thrid-container">
        <p className="latest-sub-heading">First Innings</p>
        <p className="latest-sub-para">{firstInnings}</p>
        <p className="latest-sub-heading">Second Innings</p>
        <p className="latest-sub-para">{secondInnings}</p>
        <p className="latest-sub-heading">Man Of The Match</p>
        <p className="latest-sub-para">{manOfTheMatch}</p>
        <p className="latest-sub-heading">Umpires</p>
        <p className="latest-sub-para">{umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch
