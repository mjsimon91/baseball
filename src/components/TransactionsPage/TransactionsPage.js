import React, { Component } from 'react'
import API from "../../utils/API"
import moment from 'moment'
import MlbTransactionsTable from "../MlbtransactionsTable"
import TransactionCard from '../TransactionCard'

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
        claimedOffWaivers: [],
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
            let claimedOffWaiversTemp = []

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
            
             // if the transaction type is "Designated for Assignment" add to the designatedForAssignmentArray
             for (let index = 0; index < transactionsResponse.length; index++) {
                if (transactionsResponse[index].type === "Designated for Assignment"){
                    designatedForAssignmentArrayTemp.push(transactionsResponse[index])
                };
             }

            // if the transaction type is "Optioned" add to the optionedArray
            for (let index = 0; index < transactionsResponse.length; index++) {
                if (transactionsResponse[index].type === "Optioned"){
                    optionedArrayTemp.push(transactionsResponse[index])
                };
             }
            
            // if the transaction type is "Outrighted" add to the outrightedArray
            for (let index = 0; index < transactionsResponse.length; index++) {
                if (transactionsResponse[index].type === "Outrighted"){
                    outrightedArrayTemp.push(transactionsResponse[index])
                };
             }

            // if the transaction type is "Trade" add to the tradeArray
            for (let index = 0; index < transactionsResponse.length; index++) {
                if (transactionsResponse[index].type === "Trade"){
                    tradeArrayTemp.push(transactionsResponse[index])
                };
             }
            
            // if the transaction type is "Selected" add to the selectedArray
            for (let index = 0; index < transactionsResponse.length; index++) {
                if (transactionsResponse[index].type === "Selected"){
                    selectedArrayTemp.push(transactionsResponse[index])
                };
             }
            
            // if the transaction type is "Recalled" add to the recalledArray
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
                if (transactionsResponse[index].type !== "Signed as Free Agent" && transactionsResponse[index].type !== "Status Change" && transactionsResponse[index].type !== "Assigned" && transactionsResponse[index].type !== "Designated for Assignment" && transactionsResponse[index].type !== "Optioned" && transactionsResponse[index].type !== "Outrighted" && transactionsResponse[index].type !== "Trade" && transactionsResponse[index].type !== "Selected" && transactionsResponse[index].type !== "Recalled"){
                    otherTransactionTypeArrayTemp.push(transactionsResponse[index])
                };
             }

             // if the transaction type is "Claimed Off Waivers" add to the claimedOffWaiversArray
             for (let index = 0; index < transactionsResponse.length; index++) {
                if (transactionsResponse[index].type === "Claimed Off Waivers"){
                    claimedOffWaiversTemp.push(transactionsResponse[index])
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
                claimedOffWaivers: claimedOffWaiversTemp,
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
        // Conditional rendering of components
        let isStatusChangedArray = this.state.statusChangedArray.length;
        let isAssignedArray = this.state.assignedArray.length;
        let isDesignatedForAssignmentArray = this.state.designatedForAssignmentArray.length;
        let isOptionedArray = this.state.optionedArray.length;
        let isOutrightedArray = this.state.outrightedArray.length;
        let isTradeArray = this.state.tradeArray.length;
        let isSelectedArray = this.state.selectedArray.length;
        let isRecalledArray = this.state.recalledArray.length;
        let isSignedAsaFreeAgentArray = this.state.signedAsaFreeAgent.length;
        let isClaimedOffWaivers = this.state.claimedOffWaivers.length;
        let isOtherTransactionTypeArray = this.state.otherTransactionTypeArray.length;

        console.log("other", isOtherTransactionTypeArray)
        
        return(
        
        
            <div className = 'container'>
                
                {/* Status Changed Component  */}
                {isStatusChangedArray === 0 ? (<div></div>) : (
                    <TransactionCard 
                        name = 'Status Changed'
                        transactions = {this.state.statusChangedArray}
                    />
                )}
            
                {isAssignedArray === 0 ? (<div></div>) : (
                    <TransactionCard 
                        name = {'Assigned'}
                        transactions = {this.state.assignedArray}
                    />
                )}
                    
                {/* designated for assignedment component */}
                
                {isDesignatedForAssignmentArray === 0 ? (<div></div>) : (
                    <TransactionCard 
                        name = {'Designated for Assignment'}
                        transactions = {this.state.designatedForAssignmentArray}
                    />
                )}
                
                {/* Optioned Component */}
                
                {isOptionedArray === 0 ? (<div></div>) : (
                    <TransactionCard 
                        name = {'Optioned'}
                        transactions = {this.state.optionedArray}
                    />
                )}

                {/* Outrighted Component */}
                {isOutrightedArray === 0 ? (<div></div>) : (
                    <TransactionCard 
                        name = {'Outrighted'}
                        transactions = {this.state.outrightedArray}
                    />
                )}

                {/* Trade Component */}
                
                {isTradeArray === 0 ? (<div></div>) : (
                    <TransactionCard 
                        name = {'Traded'}
                        transactions = {this.state.tradeArray}
                    />
                )}

                {/* Selected Component */}
                
                {isSelectedArray === 0 ? (<div></div>) : (
                    <TransactionCard 
                        name = {'Selected'}
                        transactions = {this.state.selectedArray}
                    />
                )}


                {/* Recalled Component */}
                
                {isRecalledArray === 0 ? (<div></div>) : (
                    <TransactionCard 
                        name = {'Called Up'}
                        transactions = {this.state.recalledArray}
                    />
                )}

                {/* Signed as a free agent component */}

                {isSignedAsaFreeAgentArray=== 0 ? (<div></div>) : (
                    <TransactionCard 
                        name = {'Signed as a Free Agent'}
                        transactions = {this.state.signedAsaFreeAgent}
                    />
                )}

                {/* Signed as a free agent component */}
                {isClaimedOffWaivers === 0 ? (<div></div>) : (
                    <TransactionCard 
                        name = {'Claimed Off Waivers'}
                        transactions = {this.state.claimedOffWaivers}
                    />
                )}


                {/* Other Component */}
                {isOtherTransactionTypeArray === 0 ? (<div></div>) : (
                    <TransactionCard 
                        name = {'Other'}
                        transactions = {this.state.otherTransactionTypeArray}
                    />
                )}
            
            </div>
           
        )
    }
 }

export default TransactionsPage;