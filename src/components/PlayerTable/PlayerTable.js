import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './PlayerTable.css'

class PlayerTable extends Component {

    render(){
        let playerArray = []
        const playerSearch = this.props.players

        // If only a single player is returned, we will need to push them into an array so we can map through the component
        // Otherwise, map through the component with the array of players

        if (Array.isArray(playerSearch)) {
            return(
                <div className = "container">
                    <table className="table table-hover">
                        <tbody>
    
                            {this.props.players.map(player => (
        
                              
                               <tr key = {player.player_id} className = 'tableRow'>
                               
                                    <th scope="row">
                                    <img className = "mlbLogo" src= {player.team_id ? (`https://www.mlbstatic.com/team-logos/${player.team_id}.svg`): ("")} alt=""/>
                                    </th>
                                    <td>
                                        <Link 
                                            to={{
                                                pathname: "/player",
                                                search: `?player=${player.player_id}`
                                            }}
                                            style={{ textDecoration: 'none' }}
                                            className = 'playerButton'>
                                                {player.name_display_first_last}
                                        </Link>
                                    </td>
                                    <td>{player.position}</td>
                                 
                                </tr>
                            
                                
                                
                                
                              
                                
                            ))}
    
                            
                        </tbody>
                    </table>
                </div>
            )
        } else {
            
            playerArray.push(playerSearch)
            
            return(
                <div className = "container">
                    <table className="table table-hover">
                        <tbody>
    
                            {playerArray.map(player => (
    
                                <tr key = {player.player_id} className = 'tableRow'>
                                    <th scope="row">
                                    <img className = "mlbLogo" src= {player.team_id ? (`https://www.mlbstatic.com/team-logos/${player.team_id}.svg`): ("")} alt=""/>
                                    </th>
                                    <td>{player.name_display_first_last}</td>
                                    <td>{player.position}</td>
                                </tr>
                            ))}
    
                            
                        </tbody>
                    </table>
                </div>
            )
        }


        
    }   
}

export default PlayerTable
