import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamCard} = props
  const {id, name, teamImageUrl} = teamCard
  return (
    <li className="team-card-container">
      <Link to={`/team-matches/${id}`} className="nav-link">
        <img src={teamImageUrl} alt={name} className="ipl-tem-logo" />
        <p className="ipl-team-heading">{name}</p>
      </Link>
    </li>
  )
}
export default TeamCard
