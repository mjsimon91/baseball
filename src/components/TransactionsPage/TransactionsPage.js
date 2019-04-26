import React, { Component } from 'react'
import API from "../../utils/API"
import moment from 'moment'
import MlbTransactionsTable from "../MlbtransactionsTable"

const TransactionTable = props => (
    <tr>
        <td>{moment(props.transaction.trans_date).format('LLL')}</td>
        <td>{props.transaction.player}</td>
        <td>{props.transaction.team}</td>
        <td>{props.transaction.note}</td>
        <td>{props.transaction.type}</td>
    </tr>
)



class TransactionsPage extends Component {

  // Setting the state to get the search results
  constructor(props) {
    super(props);
    this.state = {
        transactions: [],
        transactionTypes: []
    };
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
            //Ger Unique transaction types to use as tabs
            const transactionTypes =[...new Set(res.data.transaction_all.queryResults.row.map(x => x.type))]
            console.log(transactionTypes)
        
            this.setState({
                transactions: res.data.transaction_all.queryResults.row,
                transactionTypes: transactionTypes
            });
        });
};

    // On page load, search transactions
    componentDidMount() {
        this.searchTransactions()
    }

    // Creating afunction to populate the todo table with transactions
    transactionList() {
        return this.props.transactions.map(function(currentTransaction, i) {
            return <TransactionTable transaction={currentTransaction} key={i} />;
        });
    }
    

    

    render() {
        return(
            <div className = "container">
                <div className="row">
                    <div className="col-3">
                        <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</a>
                        <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</a>
                        <a className="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</a>
                        <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</a>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="tab-content" id="v-pills-tabContent">
                            <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                <MlbTransactionsTable 
                                transactions = {this.state.transactions}/> 
                            </div>
                            <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">...</div>
                            <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">...</div>
                            <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">...</div>
                        </div>
                    </div>
                </div>
            </div>
           
        )
    }

 }

export default TransactionsPage;