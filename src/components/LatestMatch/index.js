import './index.css'

const LatestMatch = props => {
  const {matchDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = matchDetails
  return (
    <div className="latest-match-container">
      <div className="match-details-container">
        <div>
          <p className="competing-team-heading">{competingTeam}</p>
          <p className="date">{date}</p>
          <p className="match-details-text">{venue}</p>
          <p className="match-details-text">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="competing-team-logo"
        />
      </div>
      <hr className="line" />
      <div className="match-report-container">
        <p className="report-label-text">First Innings</p>
        <p className="report-result">{firstInnings}</p>
        <p className="report-label-text">Second Innings</p>
        <p className="report-result">{secondInnings}</p>
        <p className="report-label-text">Man Of The Match</p>
        <p className="report-result">{manOfTheMatch}</p>
        <p className="report-label-text">Umpires</p>
        <p className="report-result">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
