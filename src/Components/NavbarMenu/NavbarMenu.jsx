import { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

export default function MyNavbar() {
  const [scrolling, setScrolling] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 200; // Justera detta värde efter behov
      setScrolling(!isTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <Navbar
      bg={scrolling || mobileMenuOpen ? 'B17F7B' : 'transparent'}
      variant="dark"
      expand="lg"
      fixed="top"
      style={{
        backgroundColor: scrolling || mobileMenuOpen ? '#B17F7B' : 'transparent',
        color: scrolling || mobileMenuOpen ? '#FFF9F4' : '#B17F7B',
      }}
    >
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleMobileMenuToggle} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="https://drive.google.com/file/d/18TKvXeGseitPglJthu6lFJiYb-gYp9Gd/view?usp=sharing">Resume</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
           </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

