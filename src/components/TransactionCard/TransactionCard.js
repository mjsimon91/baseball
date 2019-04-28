import React, { Component } from 'react';

class TransactionCard extends Component {
    render() {
        return(
            <div>
                <div className="card">
                    <h5 className="card-header">{this.props.name}</h5>
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>  
            </div> 
        )
    }
}

export default TransactionCard