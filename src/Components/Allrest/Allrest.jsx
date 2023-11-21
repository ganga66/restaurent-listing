import React, { useEffect, useState } from 'react'
import axios from 'axios'
//import child component in parent component
import Restcard from '../Restcard/Restcard'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Allrest() {

  //To hold all Restaurant details as in the form of array
  const [allRestaurant, setAllReataurant] = useState([])

  const fetchData = async()=>{
    const response = await axios.get('https://restaurent-server-uu59.onrender.com/restaurants')
    console.log(response.data); //array(10)
    setAllReataurant(response.data)
  }
  console.log(allRestaurant); //array(10)

  useEffect(()=>{
    fetchData() //function call
  },[])

  return (
    <div className='py-5'>
        <Container>
          <Row>
          { allRestaurant.map((item)=>(
            <Col sm={12} md={6} lg={4} xl={3} className='mb-5'>
              <Restcard restaurants={item}/>
            </Col>
        ))}   
          </Row>
        </Container>
    </div>
  )
}

export default Allrest