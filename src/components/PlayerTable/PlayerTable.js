import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './PlayerTable.css'

class PlayerTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchResults:[],
            searchResultsLength: 0
        };
    };

    componentDidMount(){
        // If there are no search results, show a message. If there are results, show the results
        const resultsFound = this.props.players
        const resultsFoundLength = resultsFound.length
        this.setState({
            searchResultsLength:resultsFoundLength
        })
    }

    render(){
        
       
        
        if(this.state.searchResultsLength > 0){
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
                                                search: `?player=${player.player_id}&active=${player.active_sw}`
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
            return(
                <div className="container">
                    <h1>No Results Found</h1>
                </div>
            )
        }
        
    }   
}

export default PlayerTable
