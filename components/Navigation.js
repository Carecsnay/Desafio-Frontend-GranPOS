import React from 'react'
import { Container, Nav, Navbar } from "react-bootstrap";

const Navigation = (props) => {
    return (
        <div>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/">ReactJS - Practice</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/alertas">Alert Model</Nav.Link>
                        <Nav.Link href="/botoes">Button Model</Nav.Link>
                        <Nav.Link href="/contador">Counter</Nav.Link>
                        <Nav.Link href="/endereco">Form Model</Nav.Link>
                        <Nav.Link href="/posts">Posts Model</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <Container>
                {props.children}
            </Container>
        </div>
    )
}

export default Navigation