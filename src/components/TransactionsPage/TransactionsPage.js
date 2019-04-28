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
        statusChangedArray: [],
        assignedArray: [],
        designatedForAssignmentArray: [],
        optionedArray: [],
        outrightedArray: [],
        tradeArray: [],
        selectedArray: [],
        recalledArray: [],
        signedAsaFreeAgent: [],
        // Create an array for anything that doesnt fit into the above
        otherTransactionTypeArray : []
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
            let statusChangedArrayTemp = []
            let assignedArrayTemp = []
            let designatedForAssignmentArrayTemp = []
            let optionedArrayTemp = []
            let outrightedArrayTemp = []
            let tradeArrayTemp = []
            let selectedArrayTemp = []
            let recalledArrayTemp = []
            let signedAsaFreeAgenTemp =[]

            // Create an array for anything that doesnt fit into the above
            let otherTransactionTypeArrayTemp = []

            const transactionsResponse = res.data.transaction_all.queryResults.row
            
            //Ger Unique transaction types to use as tabs
            const transactionTypes =[...new Set(res.data.transaction_all.queryResults.row.map(x => x.type))]
            console.log("transaction Tyes", transactionTypes)
            
            // if the transaction type is "Status Changed" add to the statusChangedArray
            for (let index = 0; index < transactionsResponse.length; index++) {
               if (transactionsResponse[index].type === "Status Change"){
                statusChangedArrayTemp.push(transactionsResponse[index])
               };
            }

            // if the transaction type is "Assigned" add to the assignedArray
            for (let index = 0; index < transactionsResponse.length; index++) {
                if (transactionsResponse[index].type === "Assigned"){
                    assignedArrayTemp.push(transactionsResponse[index])
                };
             }
            
             // if the transaction type is "Status Changed" add to the designatedForAssignmentArray
             for (let index = 0; index < transactionsResponse.length; index++) {
                if (transactionsResponse[index].type === "Designated for Assignment"){
                    designatedForAssignmentArrayTemp.push(transactionsResponse[index])
                };
             }

            // if the transaction type is "Status Changed" add to the optionedArray
            for (let index = 0; index < transactionsResponse.length; index++) {
                if (transactionsResponse[index].type === "Optioned"){
                    optionedArrayTemp.push(transactionsResponse[index])
                };
             }
            
            // if the transaction type is "Status Changed" add to the outrightedArray
            for (let index = 0; index < transactionsResponse.length; index++) {
                if (transactionsResponse[index].type === "Outrighted"){
                    outrightedArrayTemp.push(transactionsResponse[index])
                };
             }

            // if the transaction type is "Status Changed" add to the tradeArray
            for (let index = 0; index < transactionsResponse.length; index++) {
                if (transactionsResponse[index].type === "Trade"){
                    tradeArrayTemp.push(transactionsResponse[index])
                };
             }
            
            // if the transaction type is "Status Changed" add to the selectedArray
            for (let index = 0; index < transactionsResponse.length; index++) {
                if (transactionsResponse[index].type === "Selected"){
                    selectedArrayTemp.push(transactionsResponse[index])
                };
             }
            
            // if the transaction type is "Status Changed" add to the recalledArray
            for (let index = 0; index < transactionsResponse.length; index++) {
                if (transactionsResponse[index].type === "Recalled"){
                    recalledArrayTemp.push(transactionsResponse[index])
                };
             }

            //  if the transaction type is "Signed as Free Agent" add to the signedAsaFreeAgentArray
            for (let index = 0; index < transactionsResponse.length; index++) {
                if (transactionsResponse[index].type === "Signed as Free Agent"){
                    signedAsaFreeAgenTemp.push(transactionsResponse[index])
                };
             }

            // if the transaction type does not equal the above add to the otherTransactionTypeArray
            for (let index = 0; index < transactionsResponse.length; index++) {
                if (transactionsResponse[index].type != "Signed as Free Agent"){
                    signedAsaFreeAgenTemp.push(transactionsResponse[index])
                };
             }

            this.setState({
                transactions: res.data.transaction_all.queryResults.row,
                statusChangedArray: statusChangedArrayTemp,
                assignedArray: assignedArrayTemp,
                designatedForAssignmentArray: designatedForAssignmentArrayTemp,
                optionedArray: optionedArrayTemp,
                outrightedArray: outrightedArrayTemp,
                tradeArray: tradeArrayTemp,
                selectedArray: selectedArrayTemp,
                recalledArray: recalledArrayTemp,
                signedAsaFreeAgent: signedAsaFreeAgenTemp,
                otherTransactionTypeArray : otherTransactionTypeArrayTemp
            });
        });
};

    // On page load, search transactions
    componentDidMount() {

        // Get all transactions fpr the past 2 days
        this.searchTransactions()

    }    


    // Creating a function to populate the todo table with transactions
    transactionList() {
        return this.props.transactions.map(function(currentTransaction, i) {
            return <TransactionTable transaction={currentTransaction} key={i} />;
        });
    }
    

    

    render() {
        return(

            <div className = "card">
                <h5 className = "card-header">Hello</h5>
                <div>
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
                            {/* { this.transactionList() } */}
                        </tbody>
                    </table>
                </div>   
            </div>
           
        )
    }

 }

export default TransactionsPage;