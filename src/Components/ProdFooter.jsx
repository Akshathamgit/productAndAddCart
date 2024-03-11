import React from 'react'
import Card from 'react-bootstrap/Card';
import './ProdFooter.css'

function ProdFooter() {
  return (
    <div>
    <Card className='pfc'>
      <Card.Header>Features</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {' '}
            the no 1 products are available for low cost parchase now{' '}
          </p>
          <footer className="blockquote-footer">
           slaes are available  <cite title="Source Title">show now</cite>
          </footer>
        </blockquote>
      </Card.Body>
      <Card.Header>Features</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {' '}
            the no 1 products are available for low cost parchase now{' '}
          </p>
          <footer className="blockquote-footer">
           slaes are available  <cite title="Source Title">show now</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
    
    </div>
  );
}



export default ProdFooter