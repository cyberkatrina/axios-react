import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import axios from 'axios'
import BeerCard from './BeerCard';

class App extends Component {

  constructor() {
    super()

    this.state = {
      arrayOfBeer: []
    }
  }

  componentDidMount() {
    axios.get('https://api.openbrewerydb.org/v1/breweries')
    .then( res => {
      const arrayOfBeer = res.data
      this.setState({ arrayOfBeer })
    })
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ol>
            {this.state.arrayOfBeer.map((beer, index) => {
              return (
                <BeerCard 
                key={index} 
                name={beer.name} 
                site={beer.website_url} 
                phone={beer.phone} 
                street={beer.street}
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
