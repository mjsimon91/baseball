import React, { Component } from 'react';
import './TransactionCard.css'

class TransactionCard extends Component {

    mlbLogo =() => {
        let mlbTeam = this.props.tranactions.team_id
       if (mlbTeam === 108) {
           return "../../mlbLogos/angels_logo.jpeg"
       } else if (mlbTeam === "133"){
           return "../../mlbLogos/as_logo.svg"
       } else if (mlbTeam === "117"){
            return "../../mlbLogos/astros_logo.svg"
       } else if (mlbTeam === "141"){
           return "../../mlbLogos/bluejays_logo.svg"
       } else if (mlbTeam === "144"){
           return "../../mlbLogos/braves_logo.svg"
       } else if (mlbTeam === "158"){
           return "../../mlbLogos/brewers_logo.svg"
       } else if (mlbTeam === "138"){
           return "../../mlbLogos/cardinals_logo.svg"
       } else if (mlbTeam === "112"){
           return "../../mlbLogos/cubs_logo.svg"
       } else if (mlbTeam === "109"){
           return "../../mlbLogos/diamondbacks_logo.svg"
       } else if (mlbTeam === "119"){
           return "../../mlbLogos/dodgers_logo.svg"
       } else if (mlbTeam === "137"){
           return "../../mlbLogos/giants_logo.svg"
       } else if (mlbTeam === "114"){
           return "../../mlbLogos/indians_logo.svg"
       } else if (mlbTeam === "136"){
           return "../../mlbLogos/mariners_logo.svg"
       } else if (mlbTeam === "146"){
           return "../../mlbLogos/marlins_logo.svg"
       } else if (mlbTeam === "121"){
           return "../../mlbLogos/mets_logo.svg"
       } else if (mlbTeam === "120"){
           return "../../mlbLogos/nationals_logo.svg"
       } else if (mlbTeam === "110"){
           return "https://www.mlbstatic.com/team-logos/110.svg"
       } else if (mlbTeam === "135"){
           return "../../mlbLogos/padres_logo.svg"
       } else if (mlbTeam === "143"){
           return "../../mlbLogos/phillies_logo.svg"
       } else if (mlbTeam === "134"){
           return "../../mlbLogos/pirates_logo.svg"
       } else if (mlbTeam === "140"){
           return "../../mlbLogos/rangers_logo.svg"
       } else if (mlbTeam === "139"){
           return "../../mlbLogos/rays_logo.svg"
       } else if (mlbTeam === "113"){
           return "../../mlbLogos/reds_logo.svg"
       } else if (mlbTeam === "111"){
           return "../../mlbLogos/redsox_logo.svg"
       } else if (mlbTeam === "115"){
           return "../../mlbLogos/rockies_logo.svg"
       } else if (mlbTeam === "118"){
           return "../../mlbLogos/royals_logo.svg"
       } else if (mlbTeam === "116"){
           return "../../mlbLogos/tigers_logo.svg"
       } else if (mlbTeam === "142"){
           return "../../mlbLogos/twins_logo.svg"
       } else if (mlbTeam === "145"){
           return "../../mlbLogos/white_sox_logo.svg"
       } else if (mlbTeam === "147"){
           return "../../mlbLogos/yankees_logo.svg"
       } else {
           return "https://www.mlbstatic.com/team-logos/league-on-dark/1.svg"
       }
    }


    render() {
        return(
            <div>
                <div className="card mb-3">
                    <div>
                        <h5 className="card-header">{this.props.name}</h5>
                    </div>
                    
                    <div className="card-body">
                        <div className = "row">
                         {/* Loop through each transaction */}
                         {this.props.transactions.map((transaction,i) => (
                                <div key ={i} className = "col-xl-4 col-lg-4 col-md-6 col-sm-12 transactionCard">
                                    <div className="card">
                                        <div className="card-body transactionBody">
                                            <img className = "mlbLogo" src= {transaction.team_id ? (`https://www.mlbstatic.com/team-logos/${transaction.team_id}.svg`): ("")} alt=""/>
                                            <h5 className="card-title">{transaction.name_display_first_last}</h5>    
                                            <h6 className="card-subtitle mb-2 text-muted">{transaction.effective_date}</h6>
                                            <p className="card-text">{transaction.note}</p>
                                        </div>
                                    </div>
                                </div>
                               
                           

                            

                         ))}
                         </div>
                    </div>
                </div>  
            </div> 
        )
    }
}

export default TransactionCard