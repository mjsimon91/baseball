import React, { Component } from 'react'
import API from '../../utils/API'
import { Link } from 'react-router-dom'

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {search: ""};
    
        this.handleInputChange = this.handleInputChange.bind(this);
        this.returnKeyPress = this.returnKeyPress.bind(this);
      }


    // Handle the input in the search bar
    handleInputChange = event => {
        const name =event.target.name;
        const value = event.target.value;
        this.setState({
            search: value
        });
    };

    // Handle the Return/Enter key press
    returnKeyPress = event => {
        var newUrl = `/search?q=${this.state.search}`
        if (event.key === 'Enter') {
            event.preventDefault();
        
            window.location.replace(newUrl)
        }
    }


    render() {
        return(
            <nav className="navbar sticky-top navbar-light bg-light mb-2">
                <a className="navbar-brand" href="/">One Batch, Two Batch</a>
                <form className="form-inline my-2 my-lg-0">
                <input 
                    className="form-control mr-sm-2" 
                    type="search" 
                    placeholder="Search" 
                    aria-label="Search"
                    onChange = {this.handleInputChange}
                    onKeyPress = {this.returnKeyPress}
                    value = {this.state.search}
                    />
                <button 
                className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick = {this.returnKeyPress}>Search</button>
                </form>
            </nav>
        )
    }

}

export default Navbar