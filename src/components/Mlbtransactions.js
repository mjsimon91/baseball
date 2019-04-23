import React, { Component } from 'react'
import API from "../utils/API"
import moment from 'moment'

const TransactionTable = props => (
    <tr>
        <td>{props.transaction.player}</td>
        <td>{props.transaction.team}</td>
        <td>{props.transaction.note}</td>
        <td>{props.transaction.type}</td>
    </tr>
)


class MlbTransactions extends Component {

  // Setting the state to get the search results
  constructor(props) {
    super(props);
    this.state = {transactions: []};
}

    // Search Transactions
    searchTransactions = () => {
        // Getting today and creating an object
        var yesterday = moment().subtract(1, 'day').format('YYYYMMDD');
        // Today
        var today = moment().format('YYYYMMDD');

        console.log("yesterday", yesterday)
        console.log("today",today)

    API.searchMLB(yesterday, today)
        .then(res => {
        this.setState({
            transactions: res.data.transaction_all.queryResults.row
        });

        //Ger Unique transaction types to use as tabs
        const transactionTypes =[...new Set(this.state.transactions.map(x => x.type))]
        console.log(transactionTypes)
       
        });
    };

    // On page load, search transactions
    componentDidMount() {
        this.searchTransactions()
    }

    // Creating afunction to populate the todo table with transactions
    transactionList() {
        return this.state.transactions.map(function(currentTransaction, i) {
            return <TransactionTable transaction={currentTransaction} key={i} />;
        });
    }
    

    

    render() {
        return(
            <div className = "container">
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Team</th>
                            <th>Note</th>
                            <th>Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.transactionList() }
                    </tbody>
                </table>

            </div>
        )
    }

 }

export default MlbTransactions;