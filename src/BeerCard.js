import React from 'react'

const BeerCard = (props) => {
  return (
    <li style={{listStyle: 'none', marginTop: '50px'}}>
      <h3>{props.name}</h3>
      <iframe src={props.site} title='link'></iframe>
      <p style={{marginTop: '5px'}}>
        <span>{props.phone} </span>
        
        <span style={{marginLeft: '20px'}}>{props.street}</span>
      </p>
    </li>
  )
}

export default BeerCard