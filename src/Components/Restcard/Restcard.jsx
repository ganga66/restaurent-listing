import React from 'react'
import Card from 'react-bootstrap/Card';
import './Restcard.css'
import { Link } from 'react-router-dom';

function Restcard({restaurants}) {
    console.log(restaurants);



  return (
    <div>
      <Link to={`/view/${restaurants.id}`} style={{textDecoration:'none',color:'black'}}>
      <Card className='card'>
      <Card.Img variant="full" className='image p-3' src={restaurants.photograph} />
      <Card.Body>
        <Card.Title className='text-center fs-4 fw-bolder pb-2'>{restaurants.name}</Card.Title>
        <Card.Title className='p-2 border border-1'>
          Address: {restaurants.address}
          <hr />
          Neighborhood: {restaurants.neighborhood}
          <hr />
          Cuisine type: {restaurants.cuisine_type}
        </Card.Title>
      </Card.Body>
      </Card>
      </Link>
    </div>
  )
}

export default Restcard