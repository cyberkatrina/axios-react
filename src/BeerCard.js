import React from 'react'

const listStyles = {
  listStyle: 'none', 
  marginTop: '50px', 
  display: 'flex', 
  alignItems: 'space-between', 
  backgroundColor: '#372f61'
}

const BeerCard = (props) => {

  const {name, site, phone, street, city, state, zip, like, index} = props

  return (
    <li style={listStyles}>
      <iframe style={{width: '370px'}} src={site} title='link'></iframe>
      <div style={{marginLeft: '20px'}}>
        <h3>{name}</h3>
        <h4>{phone}</h4>
        <p style={{marginTop: '5px'}}>
          <span>{street} &nbsp; {city}, {state} &nbsp; {zip}</span>
        </p>
        <button onClick={like(index)} style={{backgroundImage: 'heartE.png'}}>Like</button>
      </div>
    </li>
  )
}

export default BeerCard