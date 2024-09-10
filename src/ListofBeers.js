import BeerCard from './BeerCard'
import React, { useState, useEffect} from 'react';
import MaterialUIBeerCard from './MaterialUIBeerCard';

function ListofBeers(props) {

  const [likedBeer, setLikes] = useState([])

  const likeButton = (index) => {
    if (!likedBeer.includes(props.arrayOfBeer[index])) {
      setLikes([...likedBeer, props.arrayOfBeer[index]])
    }
    else {
      let copyArr = [...likedBeer]
      copyArr.splice(copyArr.indexOf(props.arrayOfBeer[index]), 1)
      setLikes(copyArr)
    }
  }

  return(
    <div>
      {/* <MaterialUIBeerCard/> */}
      <ol style={{listStyle: 'none'}}>
        {props.beers.map((beer, index) => {
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
              like={likeButton}
              index={index}
              isLiked={likedBeer.includes(props.arrayOfBeer[index])}
            />
          )
        })}
      </ol>
    </div>
  )
}

export default ListofBeers