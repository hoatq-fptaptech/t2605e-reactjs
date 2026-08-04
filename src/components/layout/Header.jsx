import { useContext, useEffect, useState } from "react";
import { Button, Container, Form, Modal, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import Context from "../../hooks/context";

function Header(){
  const {state,dispatch} = useContext(Context);
  const [show, setShow] = useState(false);
  const [cats,setCats] = useState([]);
  const get_cats = ()=>{
    const url = "https://dummyjson.com/products/categories";
    fetch(url).then(rs=>rs.json()).then(data=>{
      setCats(data);
    })
  }
  useEffect(()=>{
    get_cats();
  },[]);
  const handleClose = ()=>{
    setShow(false);
  };
  const handleShow = () => setShow(true);

  return (
       <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">T2605E</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Category" id="basic-nav-dropdown">
              {
                cats.map((e,k)=>{
                  return (
                    <NavDropdown.Item key={k}>
                      <Link to={"/category/"+e.slug}>{e.name}</Link>
                    </NavDropdown.Item>
                  )
                })
              }
            </NavDropdown>
            <Nav.Link onClick={handleShow}>Login</Nav.Link>
            <Nav.Link>Cart ({state.cart.length})</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" required />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
        
      
        </Modal.Footer>
      </Modal>
    </Navbar>
    )
}
export default Header;