import './index.css'

import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, name, teamImageUrl} = teamDetails
  return (
    <li className="team-card-item">
      <Link to={`/team-matches/${id}`} className="team-link">
        <div className="team-card">
          <img src={teamImageUrl} alt={name} className="team-img" />
          <p className="team-name">{name}</p>
        </div>
      </Link>
    </li>
  )
}

export default TeamCard
