import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Restop from '../Restop/Restop';
import RestReview from '../RestReview/RestReview';

function Viewrest() {

    //get path parameter

    // const pathParameter = useParams()
    // console.log(pathParameter); //id:2 (object format)
    // console.log(pathParameter.id); //2

    //another method//

    //destructure parameter
    const {id} = useParams()
    console.log(id); //2

    const [restDetails, setRestDetails] = useState({})

    //Api call for get particular restaurant details
    const fetchData = async()=>{
        // const response = await axios.get(`http://localhost:3001/restaurants/${id}`) //backend path
        // console.log(response.data); //object particular restaurant details
        // setRestDetails(response.data)

        //another method (destructuring method)
        const {data} = await axios.get(`https://restaurent-server-uu59.onrender.com/restaurants/${id}`) //backend path
        console.log(data); //object particular restaurant details
        setRestDetails(data)
    }
    console.log(restDetails);

    useEffect(()=>{
        fetchData();
    },[])

  return (
    <div>
        <Container>
            <Row style={{padding:'25.5px'}}>
                <Col>
                {/* image */}
                <img src={`${restDetails.photograph}`} alt="" className='my-5' style={{width:'400px', height:'470px', borderRadius:'20px'}}/>
                </Col>
                <Col style={{marginTop:'50px'}} className='pt-5 fs-5'>
                {/* content */}
                <ListGroup className='my-5'>
                    <ListGroup.Item><b>Name:</b> {restDetails.name}</ListGroup.Item>
                    <ListGroup.Item><b>Address:</b> {restDetails.address}</ListGroup.Item>
                    <ListGroup.Item><b>Cuisine Type:</b> {restDetails.cuisine_type}</ListGroup.Item>
                    <ListGroup.Item><b>Neighborhood:</b> {restDetails.neighborhood}</ListGroup.Item>
                    <ListGroup.Item className='p-3'>
                        <div style={{display:'flex', justifyContent:'space-evenly'}}>
                        <RestReview review={restDetails.reviews}/>
                        <Restop op={restDetails.operating_hours}/>   
                        </div>
                    </ListGroup.Item>
                    {/* <ListGroup.Item><RestReview review={restDetails.reviews}/></ListGroup.Item> */}
                </ListGroup>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Viewrest