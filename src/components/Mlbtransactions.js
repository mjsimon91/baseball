import React, { Component } from 'react'
import API from "../utils/API"
import moment from 'moment'


class MlbTransactions extends Component {

  // Setting the state to get the search results
    state = {
    transactions: []
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
            transactions: res.data
        });
        });
    };

    // On page load, search transactions
    componentDidMount() {
        this.searchTransactions()
    }

    render() {
        return(
            <div>
              <h1>Hello World</h1>

            </div>
        )
    }

}

export default MlbTransactions;