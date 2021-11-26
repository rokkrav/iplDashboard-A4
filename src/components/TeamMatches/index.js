import {Component} from 'react'

import './index.css'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import LatestMatch from '../LatestMatch'

import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {teamMatchesData: {}, isLoading: true}

  componentDidMount() {
    this.getTeamMatchesData()
  }

  getTeamMatchesData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const fetchedData = await response.json()

    const formattedData = {
      teamBannerUrl: fetchedData.team_banner_url,
      latestMatchDetails: fetchedData.latest_match_details,
      recentMatches: fetchedData.recent_matches,
    }
    const {teamBannerUrl, latestMatchDetails, recentMatches} = formattedData

    const formattedMatchDetails = {
      id: latestMatchDetails.id,
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      date: latestMatchDetails.date,
      firstInnings: latestMatchDetails.first_innings,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      matchStatus: latestMatchDetails.match_status,
      result: latestMatchDetails.result,
      secondInnings: latestMatchDetails.second_innings,
      umpires: latestMatchDetails.umpires,
      venue: latestMatchDetails.venue,
    }

    const formattedRecentMatches = recentMatches.map(eachMatch => ({
      id: eachMatch.id,
      competingTeam: eachMatch.competing_team,
      competingTeamLogo: eachMatch.competing_team_logo,
      date: eachMatch.date,
      firstInnings: eachMatch.first_innings,
      manOfTheMatch: eachMatch.man_of_the_match,
      matchStatus: eachMatch.match_status,
      result: eachMatch.result,
      secondInnings: eachMatch.second_innings,
      umpires: eachMatch.umpires,
      venue: eachMatch.venue,
    }))
    this.setState({
      teamMatchesData: {
        teamBannerImageUrl: teamBannerUrl,
        latestMatchDetails: formattedMatchDetails,
        recentMatches: formattedRecentMatches,
      },
      isLoading: false,
    })
  }

  renderTeamMatches = () => {
    const {teamMatchesData} = this.state
    const {
      teamBannerImageUrl,
      latestMatchDetails,
      recentMatches,
    } = teamMatchesData
    return (
      <div className="content-container">
        <img
          src={teamBannerImageUrl}
          alt="team banner"
          className="team-banner-img"
        />
        <h1 className="latest-match-heading">Latest Match</h1>
        <LatestMatch matchDetails={latestMatchDetails} />
        <ul className="recent-matches-list">
          {recentMatches.map(eachMatch => (
            <MatchCard key={eachMatch.id} recentMatchDetails={eachMatch} />
          ))}
        </ul>
      </div>
    )
  }

  renderLoader = () => (
    <div testid="loader">
      <Loader type="Oval" color="#ffffff" width={50} height={50} />
    </div>
  )

  render() {
    const {teamMatchesData, isLoading} = this.state
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(teamMatchesData)
    return (
      <div className={`team-matches-container ${id}`}>
        {isLoading ? this.renderLoader() : this.renderTeamMatches()}
      </div>
    )
  }
}

export default TeamMatches
