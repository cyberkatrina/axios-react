import React from 'react'

const listStyles = {
  listStyle: 'none', 
  marginTop: '50px', 
  display: 'flex', 
  alignItems: 'space-between', 
  backgroundColor: '#372f61'
}

const BeerCard = (props) => {

  const {name, site, phone, street, city, state, zip, like, index, isLiked} = props

  return (
    <li style={listStyles}>
      <iframe style={{width: '370px'}} src={site} title='link'></iframe>
      <div style={{marginLeft: '20px'}}>
        <h3>{name}</h3>
        <h4>{phone}</h4>
        <p style={{marginTop: '5px'}}>
          <span>{street} &nbsp; {city}, {state} &nbsp; {zip}</span>
        </p>
        <div onClick={() => like(index)}>
          {
            isLiked ? 
              <p style={{color: 'red'}}>&#10084;</p>
              : <p style={{color: 'white'}}>&#10084;</p>

          }
        </div>
      </div>
    </li>
  )
}

export default BeerCard