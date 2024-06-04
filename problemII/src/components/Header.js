import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#">Top Products</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
