import React, { Component } from 'react';
import './TransactionCard.css'

class TransactionCard extends Component {
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