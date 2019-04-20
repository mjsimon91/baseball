import axios from 'axios';


// Creating the base URL for searching MLB's transaction API
const mlbTransactions = "https://lookup-service-prod.mlb.com/json/named.transaction_all.bam?sport_code='mlb'&start_date="


// Creating the base URL for search mysportsfeeds API



// Creating the queries
export default {

    // Get all transactions from today
    searchMLB: function(yesterday, today) {
        return axios.get(mlbTransactions + yesterday + '&end_date=' + today)
    }
}