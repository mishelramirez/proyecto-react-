
import react, {useState, useEffect} from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import ItemCount from "./ItemCount";
import Logo from "./Logo";


function ColorSchemesExample() {
  

  const onAdd = (quantity) => {
    console.log(`compro ${quantity} unidades`);
  }

  
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Logo/>
          <Navbar.Brand href="#home">Nail Sandra </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="https://www.masglo.com/?gclid=Cj0KCQjwteOaBhDuARIsADBqRejkH8et9BpW6cs1KbsxA_CkArlDK-P_Sa3vdsv8IH3KuE27C6tA9ooaAuCSEALw_wcB">Sobre nosotros   <i class="bi bi-person-circle"></i></Nav.Link>
            <Nav.Link href="https://www.masglo.com/?gclid=Cj0KCQjwteOaBhDuARIsADBqRejkH8et9BpW6cs1KbsxA_CkArlDK-P_Sa3vdsv8IH3KuE27C6tA9ooaAuCSEALw_wcB">Tienda    <i class="bi bi-shop"></i></Nav.Link>
            <Nav.Link href="https://www.masglo.com/?gclid=Cj0KCQjwteOaBhDuARIsADBqRejkH8et9BpW6cs1KbsxA_CkArlDK-P_Sa3vdsv8IH3KuE27C6tA9ooaAuCSEALw_wcB">Contactanos     <i class="bi bi-phone-vibrate"></i></Nav.Link>
          </Nav> 
          <ItemCount initial={1} stock={5} onAdd={onAdd} />
          <CartWidget />
        </Container>
      </Navbar>
     
    
    </>
  );
}

export default ColorSchemesExample;

