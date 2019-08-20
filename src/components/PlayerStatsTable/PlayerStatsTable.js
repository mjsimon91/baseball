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
                            <th scope="row">1</th>
                            <td>{this.props.playerStats.g}</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            </tr>
                            <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            </tr>
                            <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                            </tr>
                        </tbody>
                 </table>
                </div>
            </div>
            
        )
    }
}

export default PlayerStatstable;