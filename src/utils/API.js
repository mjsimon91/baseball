import axios from 'axios';


// Creating the base URL for searching MLB's transaction API
const mlbTransactions = "https://lookup-service-prod.mlb.com/json/named.transaction_all.bam?sport_code='mlb'&start_date="


// Creating the base URL to search for an MLB player
const mlbHostUrl = "http://lookup-service-prod.mlb.com"
const playerSearch = `/json/named.search_player_all.bam?"`
const mlbSportCode = "sport_code='mlb'";
const aaaSportCode = "sport_code='aaa'";
const aaSportCode = "sport_code='aa'";
const aSportCode = "sport_code='a'"
const activePlayer = "&active_swY"
const playerDetails = "/json/named.player_info.bam?"
const mlbPlayerStats = "/json/named.sport_hitting_tm.bam?league_list_id='mlb'&game_type='R'&season=2019&player_id="



// Creating the queries
export default {

    // Get all transactions from today
    searchMLB: function(yesterday, today) {
        return axios.get(mlbTransactions + yesterday + '&end_date=' + today)
    },

    // Search for players using fuzzy name search across the MLB
    mlbPlayerSearch: function(namePart) {
        return axios.get(mlbHostUrl + playerSearch + mlbSportCode + activePlayer + "&name_part='" + namePart + "%25'" )
    },

    //These do not seem to work at the moment. Need to find a real api to hit
    
    // // Search for players using fuzzy name search across AAA
    // aaaPlayerSearch: function(namePart) {
    //     return axios.get(mlbHostUrl + playerSearch + aaaSportCode + activePlayer + "&name_part='" + namePart + "%25'" )
    // },

    // // Search for players using fuzzy name search across AA
    // aaPlayerSearch: function(namePart) {
    //     return axios.get(mlbHostUrl + playerSearch + aaSportCode + activePlayer + "&name_part='" + namePart + "%25'" )
    // },

    // // Search for players using fuzzy name search across A
    // aPlayerSearch: function(namePart) {
    //     return axios.get(mlbHostUrl + playerSearch + aSportCode + activePlayer + "&name_part='" + namePart + "%25'" )
    // }

    // Search for a specific MLB player
    mlbPlayerInfo: function(playerId) {
        return axios.get(mlbHostUrl + playerDetails + mlbSportCode + "&player_id=" + playerId)
    },

    // only returning data for 2019 right now
    mlbPlayerData:  function(playerId) {
        return axios.get(mlbHostUrl + mlbPlayerStats + playerId)
    }
}