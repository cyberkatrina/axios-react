import './App.css';
import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'
import ListofBeers from './ListofBeers'
import Button from '@mui/material/Button'

class App extends Component {

  constructor() {
    super()
    this.state = {
      arrayOfBeer: [],
      likedBeer: [],
      searchTerm: ""
    }
  }

  componentDidMount() {
    axios.get('https://api.openbrewerydb.org/v1/breweries')
    .then( res => {
      const arrayOfBeer = res.data
      this.setState({ arrayOfBeer })
    })
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  filterSearch(term) {
    return (item) => {
      return(
        item.name.toLowerCase().includes(term.toLowerCase())
      )
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Link to='/'>
            <Button variant='contained' color='secondary'>Go Home</Button>
          </Link>
          <h1 style={{marginTop: "70px", marginBottom: "0px"}}>Breweries Data</h1>
          <form>
            <input type='text' name='searchTerm' value={this.state.searchTerm} onChange={this.handleChange} placeholder='search by name'></input>
          </form>
          {
            this.state.searchTerm ?
            <ListofBeers arrayOfBeer={this.state.arrayOfBeer} beers={this.state.arrayOfBeer.filter(this.filterSearch(this.state.searchTerm))}/> :
            <ListofBeers arrayOfBeer={this.state.arrayOfBeer} beers={this.state.arrayOfBeer}/>
          }
        </header>
      </div>
    );
  }
}

export default App;
