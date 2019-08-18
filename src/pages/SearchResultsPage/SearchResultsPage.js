import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import API from '../../utils/API'
import PlayerTable from '../../components/PlayerTable'


class SearchResultsPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: "",
            searchResults:[]
        };
    };

    // Create a function to search for the player that has searched
    searchPlayer = query => {
        
        // Search MLB and save to the state of the component
        API.mlbPlayerSearch(query)
            .then(res =>{
                const mlbPlayerResult = res.data.search_player_all.queryResults.row;
                this.setState({
                    searchResults: mlbPlayerResult
                })
            }).catch(error => {
                console.log(error)
            })
        
            // // Search AAA
            // API.aaaPlayerSearch(query)
            // .then(res =>{
            //     const aaaPlayerResult = res.data.search_player_all.queryResults.row;
            //     searchResults.push(aaaPlayerResult)  
            
            // }).catch(error => {
            //     console.log(error)
            // })

            // // Search AA
            // API.aaPlayerSearch(query)
            // .then(res =>{
            //     const aaPlayerResult = res.data.search_player_all.queryResults.row;
            //     searchResults.push(aaPlayerResult)  
            // }).catch(error => {
            //     console.log(error)
            // })

            // // Search A
            // API.aPlayerSearch(query)
            // .then(res =>{
            //     const aPlayerResult = res.data.search_player_all.queryResults.row;
            //     searchResults.push(aPlayerResult)
            // }).catch(error => {
            //     console.log(error)
            // })

    }


      handleSearchPlayer = event => {

        // Get the search parameter
          const params = new URLSearchParams(window.location.search)
          const player = params.get("q")
          this.searchPlayer(player)
    }

    componentDidMount(){
        this.handleSearchPlayer()
    }

    render(){
        return(
           <div>
            <PlayerTable 
                players = {this.state.searchResults}
            />
           </div>
        )
    }
        
}

export default SearchResultsPage