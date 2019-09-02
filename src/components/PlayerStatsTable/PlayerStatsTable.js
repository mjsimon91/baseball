import React, { Component } from 'react'

class PlayerStatstable extends Component {
    render(){
        return(
            <div className= 'container'>
                <div className='table-responsive'>
                    <table className="table">
                        <thead>
                            <tr>
                            <th scope="col">Games</th>
                            <th scope="col">At Bats</th>
                            <th scope="col">Hits</th>
                            <th scope="col">Home Runs</th>
                            <th scope="col">RBIs</th>
                            <th scope="col">Runs</th>
                            <th scope="col">Stolen Bases</th>
                            <th scope="col">Caught Stealing</th>
                            <th scope="col">Strikeouts</th>
                            <th scope="col">Walks</th>
                            <th scope="col">On Base %</th>
                            <th scope="col">Slugging %</th>
                            <th scope="col">Average</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">{this.props.playerStats.season}</th>
                            <td>{this.props.playerStats.g}</td>
                            <td>{this.props.playerStats.h}</td>
                            <td>{this.props.playerStats.hr}</td>
                            <td>{this.props.playerStats.rbi}</td>
                            <td>{this.props.playerStats.r}</td>
                            <td>{this.props.playerStats.sb}</td>
                            <td>{this.props.playerStats.cs}</td>
                            <td>{this.props.playerStats.so}</td>
                            <td>{this.props.playerStats.bb}</td>
                            <td>{this.props.playerStats.obp}</td>
                            <td>{this.props.playerStats.slg}</td>
                            <td>{this.props.playerStats.avg}</td>
                            </tr>
                            <tr>
                            <th scope="row">Career</th>
                            <td>{this.props.careerBatter.g}</td>
                            <td>{this.props.careerBatter.h}</td>
                            <td>{this.props.careerBatter.hr}</td>
                            <td>{this.props.careerBatter.rbi}</td>
                            <td>{this.props.careerBatter.r}</td>
                            <td>{this.props.careerBatter.sb}</td>
                            <td>{this.props.careerBatter.cs}</td>
                            <td>{this.props.careerBatter.so}</td>
                            <td>{this.props.careerBatter.bb}</td>
                            <td>{this.props.careerBatter.obp}</td>
                            <td>{this.props.careerBatter.slg}</td>
                            <td>{this.props.careerBatter.avg}</td>
                            </tr>
                        </tbody>
                 </table>
                </div>
            </div>
            
        )
    }
}

export default PlayerStatstable;