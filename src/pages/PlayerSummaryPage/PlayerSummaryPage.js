import React, { Component } from 'react'
import API from '../../utils/API'
import PlayerInfoCard from '../../components/PlayerInfoCard'
import PlayerStatsTable from '../../components/PlayerStatsTable'

class PlayerSummaryPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            playerInfo: [],
            activePlayerStats: []
        }
    }

    // Get the id of the player from the url
    getPlayerId = () => {
        const params = new URLSearchParams(window.location.search)
        const playerId = params.get("player")
        this.playerDetails(playerId)
        this.playerStats(playerId)
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

    // Use the API to to get stats for that player
    playerStats = playerId => {
        
        API.mlbPlayerData(playerId)
        .then(res =>{
            this.setState({
                activePlayerStats: res.data.sport_hitting_tm.queryResults.row
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
               />
               
            </div>
        )
    } 
}

export default PlayerSummaryPage