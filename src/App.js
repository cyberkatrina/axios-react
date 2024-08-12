import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import axios from 'axios'
import BeerCard from './BeerCard';

class App extends Component {

  constructor() {
    super()
    this.state = {
      arrayOfBeer: [],
      likedBeer: []
    }
  }

  componentDidMount() {
    axios.get('https://api.openbrewerydb.org/v1/breweries')
    .then( res => {
      const arrayOfBeer = res.data
      this.setState({ arrayOfBeer })
    })
  }

  likeButton = (index) => {
    this.setState({likedBeer: [...this.state.likedBeer, this.state.arrayOfBeer[index]]})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 style={{marginTop: "70px", marginBottom: "0px"}}>Breweries Data</h1>
          <ol>
            {this.state.arrayOfBeer.map((beer, index) => {
              return (
                <BeerCard 
                key={index} 
                name={beer.name} 
                site={beer.website_url} 
                phone={beer.phone} 
                street={beer.street}
                city={beer.city}
                state={beer.state}
                zip={beer.postal_code}
                like={this.likeButton}
                index={index}
                />
              )
            })}
          </ol>
        </header>
      </div>
    );
  }
}

export default App;
