import React from 'react'
import { Container, Nav, Navbar } from "react-bootstrap";

const Navigation = (props) => {
    return (
        <div>
            <Navbar bg="dark" data-bs-theme="dark" className="mb-2">
                <Container>
                    <Navbar.Brand href="/">ReactJS - Pratice</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Posts Model</Nav.Link>
                        <Nav.Link href="/alertas">Alert Model</Nav.Link>
                        <Nav.Link href="/botoes">Button Model</Nav.Link>
                        <Nav.Link href="/endereco">Form Model</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <Container className='mb-3'>
                {props.children}
            </Container>
        </div>
    )
}

export default Navigation