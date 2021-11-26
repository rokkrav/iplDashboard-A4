import './index.css'

const MatchCard = props => {
  const {recentMatchDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    result,
    matchStatus,
  } = recentMatchDetails

  const matchResultClassName =
    matchStatus === 'Won'
      ? 'recent-match-status-won'
      : 'recent-match-status-loss'
  return (
    <li className="recent-match-item-container">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="recent-competing-team-logo"
      />
      <p className="recent-competing-team">{competingTeam}</p>
      <p className="recent-match-result">{result}</p>
      <p className={matchResultClassName}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
