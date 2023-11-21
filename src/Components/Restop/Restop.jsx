import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';

function Restop({op}) {
  console.log(op); //day details

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Operating Hours
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Restaurant Timimg</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <ListGroup>
      <ListGroup.Item className='text-success'>Monday: {op?.Monday}</ListGroup.Item>
      <ListGroup.Item className='text-success'>Tuesday: {op?.Tuesday}</ListGroup.Item>
      <ListGroup.Item className='text-success'>Wednesday: {op?.Wednesday}</ListGroup.Item>
      <ListGroup.Item className='text-success'>Thursday: {op?.Thursday}</ListGroup.Item>
      <ListGroup.Item className='text-success'>Friday: {op?.Friday}</ListGroup.Item>
      <ListGroup.Item className='text-success'>Saturday: {op?.Saturday}</ListGroup.Item>
      <ListGroup.Item className='text-danger'>Sunday: {op?.Sunday}</ListGroup.Item>
    </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Restop