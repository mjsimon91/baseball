import React, { Component } from 'react'
import moment from 'moment';

class PlayerInfoCard extends Component {
    render(){
        return(
            <div className = "container">
                <div className="card text-center">
                <div className="card-header">
                    Player Info
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.playerBio.name_display_first_last}</h5>
                        <p className="card-text"><b>Position</b>: {this.props.playerBio.primary_position_txt}</p>
                        <p className="card-text"><b>Birth Date</b>: {moment(this.props.playerBio.birth_date).format( "MMM DD, YYYY")} (<b>Age</b>: {this.props.playerBio.age})</p>
                        <p className="card-text"><b>Pro Debut Date</b>: {moment(this.props.playerBio.pro_debut_date).format("MMM DD, YYYY")} ({moment().diff(this.props.playerBio.pro_debut_date, 'years')} ago)</p>
                        <p className="card-text"><b>Bats</b>: {this.props.playerBio.bats} <b>Throws</b>: {this.props.playerBio.throws}</p>
                        <p className="card-text"><b>Height</b>: {this.props.playerBio.height_feet}' {this.props.playerBio.height_inches} <b>Weight</b>: {this.props.playerBio.weight}</p>
                        <p className="card-text"><b>Status</b>: {this.props.playerBio.status}</p>
                        <img className = "mlbLogo" src={`https://www.mlbstatic.com/team-logos/${this.props.playerBio.team_id}.svg`} alt={this.props.playerBio.team_name}/>
                    </div>
                </div>
            </div>
           
        )
    }
}

export default PlayerInfoCard