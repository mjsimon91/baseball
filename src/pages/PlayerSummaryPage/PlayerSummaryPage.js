import React, { Component } from 'react'
import API from '../../utils/API'
import PlayerInfoCard from '../../components/PlayerInfoCard'
import PlayerStatsTable from '../../components/PlayerStatsTable'
import moment from 'moment'


class PlayerSummaryPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            playerInfo: [],
            yearsPlayed: [],
            activePlayerStats: [],
            careerBatterStats: []
        }
    }

    // Get the id of the player from the url
    getPlayerId = () => {
        const params = new URLSearchParams(window.location.search)
        const playerId = params.get("player")
        const activePlayer = params.get("active")
        console.log(activePlayer)

        if(activePlayer === 'Y'){
            // Loop through the active seasons until there is no response for a season
            let season = moment().format('YYYY')
            console.log(season)

            this.playerDetails(playerId)
            this.seasonsPlayed(playerId)
            this.activePlayerStats(2019, playerId)
            this.careerBatterStats(playerId)
        } else {
            this.playerDetails(playerId)
            this.seasonsPlayed(playerId)
            this.careerBatterStats(playerId)
        }
        
    }

    // Use the API in order to go get information on that player
    playerDetails = playerId => {
    
        API.mlbPlayerInfo(playerId)
        .then(res => {
            this.setState({
                playerInfo: res.data.player_info.queryResults.row
            })       
        })
        .catch(err => console.log(err))
    }

    // Find out which years a player played
    seasonsPlayed = playerId => {

        API.teamsPlayedFor(playerId)
        .then(res => {
            for (let index = 0; index < res.data.player_teams.queryResults.row.length; index++) {
                let majorLeagueTeams = []
                const playerTeams = res.data.player_teams.queryResults.row[index];
                
            }
            
        })

    }

    // Use the API to to get stats for that player
    activePlayerStats = (season, playerId) => {
        
        API.seasonMlbBatter(season, playerId)
        .then(res =>{
            this.setState({
                activePlayerStats: res.data.sport_hitting_tm.queryResults.row
            })
        })
        .catch(err => console.log(err))
    }

    // Get the career MLB stats for a player
    careerBatterStats = playerId => {
        API.careerMlbBatter(playerId)
        .then(res => {
            this.setState({
                careerBatterStats: res.data.sport_career_hitting.queryResults.row
            })
        })
        .catch(err => console.log(err))
    }
    

    // Allow to watch a player

    // Assign a player to a team

    // Call this all on componentDidMount
    componentDidMount(){
        this.getPlayerId()
    }

    render(){
        return(
            <div>
               <PlayerInfoCard
               playerBio = {this.state.playerInfo}
               />
               <PlayerStatsTable 
               playerStats = {this.state.activePlayerStats}
               careerBatter = {this.state.careerBatterStats}
               />
               
            </div>
        )
    } 
}

export default PlayerSummaryPage




