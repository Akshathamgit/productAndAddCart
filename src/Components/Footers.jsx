import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Footers.css'

function Footers() {
  return (
    <div>
        <Card className='footer'>
      <Card.Header as="h5">footers &copy;  &copy;  &copy;  &copy; &reg; &reg;&reg;</Card.Header>
      <Card.Body>
        <Card.Title>location to vist please call below number</Card.Title>
        <Card.Text>
          phone no- +100243
        </Card.Text>
        <Button variant="primary">Contact Us</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Footers