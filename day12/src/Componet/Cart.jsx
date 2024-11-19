import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Cart.css';
import img1 from '../Componet/Img/5.jpg';
import img2 from '../Componet/Img/6.jpg';
import img3 from '../Componet/Img/7.jpg';
import img4 from '../Componet/Img/8.jpg';


function Cart() {
  return (
    <div className="c">
        {/* 1 */}
    <div className='c1'>
        <Card style={{ width: '17rem'}}>
      <Card.Img className='crt' variant="top" src={img1} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
    {/* 2 */}
    <div className='c1'>
        <Card style={{ width: '17rem'}}>
      <Card.Img className='crt' variant="top" src={img2} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
    {/* 3 */}
    <div className='c1'>
        <Card style={{ width: '17rem'}}>
      <Card.Img className='crt' variant="top" src={img3} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
    {/* 4 */}
    <div className='c1'>
        <Card style={{ width: '17rem'}}>
      <Card.Img className='crt' variant="top" src={img4} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
    </div>

  )
}

export default Cart