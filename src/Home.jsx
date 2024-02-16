import React, { useEffect } from 'react'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './App.css'


const Home = () => {

let [items, setitems] = useState([]);
let [cart, setcart] = useState(0);

useEffect(()=> {
  fetchuser();
}, [] )

const onclickcart= ()=>{
setcart(cart +1)

}
const back= ()=>{
  setcart(0)
}

const fetchuser = async () => {

  let linkApi = await fetch('https://fakestoreapi.com/products')
  let products = await linkApi.json();
  setitems(products);
  console.log(products)
}

if(cart===1){
return(
  <>
  <h1> your cart Items</h1>
  <Button onClick={back} variant="warning" >back to home</Button>
  </>
)

}

  return (  
<>
  <div style={{backgroundColor: "black", color: "white"}}>
    <marquee>wellcome to online fake store  </marquee>
  </div>

<Navbar expand="lg" className="bg-body-tertiary" sticky='top'>
      <Container>
        <Navbar.Brand href="#home">Online Fake Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Button onClick={onclickcart} variant="warning"> Cart</Button>
      </Container>
    </Navbar>
<div className="container mt-5" >
<div className="row ">
  <div className="col wrapper " style={{display: "flex", flexWrap: "wrap", gap: "30px", justifyContent: "center"}}>

{
     items.map(item => ( 
<div className="row">
      <div className="col-4 abc">
      <Card className='cardi' border="danger" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.image}  />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
          {item.description}
        </Card.Text>
        <Card.Title>Price:{item.price}</Card.Title>
        <Button variant="primary">Add To Cart</Button>
      </Card.Body>
    </Card>
   
    </div>
    </div>
     ) )
    
}
</div> 
</div>
</div>
</>
   

  )
}

export default Home